import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

//import Foto from '../imagenes/tipscuidado.svg'

import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBBox, CDBContainer } from 'cdbreact';


function Home() {
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
                <Nav.Link href="publicaciones">Publicaciones</Nav.Link>
                <Nav.Link  href='monitoreo'>Monitoreo</Nav.Link>
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

          <Navbar.Brand  className='ms-3' href="home">CureFish</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
              <Button href='login' variant="outline-info">Iniciar sesión</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            //src={Foto}
            src="https://wowslider.com/sliders/demo-80/data1/images/plumage176723_1920.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Tips y cuidados</h2>
            <p>Te mostramos como cuidar a tus mascotas </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wowslider.com/sliders/demo-80/data1/images/sheet546475_1920.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2>Ordena tu pecera</h2>
            <p>No pierdas la oportunidad de que este producto sea tuyo.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wowslider.com/sliders/demo-80/data1/images/nature497978_1920.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2>Otras articulos para el mantenimiento de tu pecera</h2>
            <p>¡El cuidado del hogar de tus mascotas también es importante!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <CDBContainer>
        <CDBBox tag="span">Span</CDBBox>
        <CDBBox tag="div">Div</CDBBox>
        <CDBBox tag="p">Paragraph</CDBBox>
        <CDBBox tag="section">Section</CDBBox>
      </CDBContainer>



      <CDBFooter className="shadow">
        <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <a href="/" className="d-flex align-items-center p-0 text-dark">
                <img alt="logo" src="logo" width="30px" />
                <span className="ml-3 h5 font-weight-bold">Devwares</span>
              </a>
              <p className="my-3" style={{ width: '250px' }}>
                We are creating High Quality Resources and tools to Aid developers during the
                developement of their projects
              </p>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Devwares
              </p>
              <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink href="/">Recurso</CDBFooterLink>
                <CDBFooterLink href="/">Acerca de Nosotros</CDBFooterLink>
                <CDBFooterLink href="/">Contacto</CDBFooterLink>
                <CDBFooterLink href="/">Blog</CDBFooterLink>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Ayuda
              </p>
              <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink href="/">Soporte</CDBFooterLink>
                <CDBFooterLink href="login">Inicia Sesión</CDBFooterLink>
                <CDBFooterLink href="login">Registrate</CDBFooterLink>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Productos
              </p>
              <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink href="/">Pecera Inteligente</CDBFooterLink>
                <CDBFooterLink href="/">Modulo de monitoreo</CDBFooterLink>
                <CDBFooterLink href="/">Alimento</CDBFooterLink>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <CDBBox
            display="flex"
            justifyContent="center"
            style={{ width: '100%' }}
            className="mx-auto mt-4"
          >
            <CDBBtn href="https://facebook.com/" flat color="dark" className="p-2">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn href="https://twitter.com/" flat color="dark" className="mx-3 p-2">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn href="https://instagram.com/" flat color="dark" className="p-2">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </CDBBox>
          <small className="text-center mt-5">&copy; CureFrish, 2022. Todos los derechos reservados.</small>
        </CDBBox>
      </CDBFooter>

    </>


  );
}

export default Home;