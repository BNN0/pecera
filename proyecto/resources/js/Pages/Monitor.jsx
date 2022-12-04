import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm, Head } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Dialog } from '@mui/material';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import Settings from '@mui/icons-material/Settings';
import Update from '@mui/icons-material/Update';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Opacity from '@mui/icons-material/Opacity';
import Thermostat from '@mui/icons-material/Thermostat';
import Water from '@mui/icons-material/Water';
import Modal from '@mui/material/Modal';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormControl from '@mui/material/FormControl';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

import Temperature from './Auth/Graphs/TemperatureGraph';
import { filter, isEmpty } from 'lodash';



export default function Monitor({ auth, devices, registers }) {

    const [dispositivo, setDispositivo] = useState("");

    const { data, setData, post, processing, reset, errors } = useForm({
        serial: '',
    });

    

    const submit = (e) => {
        e.preventDefault();
        post(route('device.store'), { onSuccess: () => reset() });
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const formatoFecha = (fecha) => {
        let newDate = new Date(fecha);
        let cDate = newDate.getDate() + '/' +
            (newDate.getMonth() + 1) + '/' +
            newDate.getFullYear();
        return (cDate);
    };

    var newTemp = registers.map(register =>{
        if(register.device_id == dispositivo){
            if(register != '')
            return register.temperatura;
        }
    })

    let filTemp = newTemp.filter(function (el){
        return el;
    })

    var newNivel = registers.map(register =>{
        if(register.device_id == dispositivo){
            if(register != '')
            return register.nivel_agua;
        }
    })

    let filNivel = newNivel.filter(function (el){
        return el;
    })

    var newSuciedad = registers.map(register =>{
        if(register.device_id == dispositivo){
            if(register != '')
            return register.suciedad;
        }
    })

    let filSuciedad = newSuciedad.filter(function (el){
        return el;
    })

    var newFecha = registers.map(register =>{
        if(register.device_id == dispositivo){
            if(register != '')
            return formatoFecha(register.created_at);
        }
    })

    let filFecha = newFecha.filter(function (el){
        return el;
    })

    console.log(filFecha)
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Monitoreo" />

            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Dispositivo {dispositivo}

                    </Typography>

                    <Container>
                        <Navbar bg="blue" variant="dark">
                            <Container>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="me-auto my-2 my-lg-0"
                                        style={{ maxHeight: '100px' }}
                                        
                                    >
                                        
                                            <NavDropdown
                                                title="Seleccionar dispositivo"
                                                id="navbarScrollingDropdown"
                                            >
                                                {devices.map(device =>
                                                    <NavDropdown.Item
                                                        key={device.id}
                                                        onClick={()=>setDispositivo(device.id)}
                                                        >
                                                        Dipositivo {device.id}
                                                    </NavDropdown.Item>
                                                )}

                                            </NavDropdown>
                                        

                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Container>
                </Toolbar>
            </AppBar>



            <Container fixed>
                <Grid container spacing={3}>
                    {/*Dibujo*/}
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                p: 0,
                                border: '1px dashed grey',
                                borderRadius: 2,
                            }}>
                            <p>Temperatura:</p>
                            <p>Nivel de agua:</p>
                            <p>Indicador de suciedad:</p>
                        </Box>
                    </Grid>
                    {/*Graficas*/}
                    <Grid item xs={12} md={8}>
                        <Box
                            sx={{ p: 0, border: '1px dashed grey' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs centered value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab icon={<Thermostat />} {...a11yProps(0)}/>
                                    <Tab icon={<Opacity />} {...a11yProps(1)} />
                                    <Tab icon={<Water />} {...a11yProps(2)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <Temperature
                                    datos = {filTemp}
                                    fechas={filFecha} />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Temperature
                                    datos={filNivel}
                                    fechas={filFecha} />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <Temperature
                                    datos={filSuciedad}
                                    fechas={filFecha} />
                            </TabPanel>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{ p: 6, border: '1px dashed grey' }}>

                            <form onSubmit={submit}>
                                <input
                                    value={data.serial}
                                    onChange={e => setData('serial', e.target.value)}
                                    placeholder="Ingrese serial"
                                    className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                ></input>
                                <InputError message={errors.serial} className="mt-2" />
                                <PrimaryButton className="mt-4" discable={processing}>Registrar dispositivo</PrimaryButton>
                            </form>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box
                            sx={{ p: 12, border: '1px dashed grey' }}>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </AuthenticatedLayout>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={'simple-tabpanel-${index}'}
            aria-labelledby={'simple-tab-${index}'}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component={'span'} variant={'body1'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: 'simple-tab-${index}',
        'aria-controls': 'simple-tabpanel-${index}',
    };
}