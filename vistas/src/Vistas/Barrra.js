import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';


import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function Barra() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container>
            <Navbar bg="dark" variant="dark">
                <Container fluid>

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



        </Container>
    );

}

export default Barra;