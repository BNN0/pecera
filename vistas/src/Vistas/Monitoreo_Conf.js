import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function Monitoreo() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container fluid>

                    <Button variant="outline-info" onClick={handleShow2}>
                        Options
                    </Button>

                    <Offcanvas show={show2} onHide={handleClose2}>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="publicaciones">Publicaciones</Nav.Link>
                                <Nav.Link href="monitoreo">Monitoreo</Nav.Link>
                                <NavDropdown
                                    title="otros"
                                >
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Buscar"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Buscar</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Offcanvas>

                    <Navbar.Brand className='ms-3' href="home">CureFish</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavDropdown title="Dispositivo" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Pecera1</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Pecera2</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item >

                                    <Button onClick={handleShow} variant="primary">
                                        Nueva pecera
                                    </Button>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Completa los espacios</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>ID del producto</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="34521"
                                                        autoFocus
                                                    />
                                                </Form.Group>
                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="exampleForm.ControlTextarea1"
                                                >
                                                    <Form.Label>Contraseña</Form.Label>
                                                    <Form.Control type="password" rows={3} />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={handleClose}>
                                                Save Changes
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>

                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Button href='login' variant="outline-info">Iniciar sesión</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <DropdownButton id="dropdown-basic-button" title="Visualizar">
                <Dropdown.Item href="#/action-1">Temperatura</Dropdown.Item>
                <Dropdown.Item href="#/action-2">suciedad</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Nivel de agua</Dropdown.Item>
            </DropdownButton>



        </>


    );

}

export default Monitoreo;