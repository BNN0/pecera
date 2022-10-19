import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Publicaciones() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container fluid>

                    <Button variant="outline-info" onClick={handleShow}>
                        Options
                    </Button>

                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#publicaciones">Publicaciones</Nav.Link>
                                <Nav.Link href="#monitoreo">Monitoreo</Nav.Link>
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
                                <NavDropdown.Item href="#action4">
                                    Pecera2
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    ¿Nueva pecera?
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Button href='login' variant="outline-info">Iniciar sesión</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>


    );

}

export default Publicaciones;