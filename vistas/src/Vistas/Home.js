import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import beta from "../imagenes/beta.png"
import peces from "../imagenes/peces.png"
import uwu from "../imagenes/uwu.png"

//import Foto from '../imagenes/tipscuidado.svg'

import { CDBFooter, CDBBtn, CDBIcon, CDBBox, CDBContainer } from 'cdbreact';



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
                <Nav.Link  href='monitoreoo'>Monitoreo</Nav.Link>
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

      <div className='carrousel'>
      <Carousel fade>
        <Carousel.Item>
          <img
          id="beta"
            className="d-block w-100"
            //src={Foto}
            src={beta}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Tips y cuidados</h2>
            <p>Te mostramos como cuidar a tus mascotas </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          id="peces"
            className="d-block w-100"
            src={peces}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2>Ordena tu pecera</h2>
            <p>No pierdas la oportunidad de que este producto sea tuyo.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          id="uwu"
            className="d-block w-100"
            src={uwu}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2>Otras articulos para el mantenimiento de tu pecera</h2>
            <p>¡El cuidado del hogar de tus mascotas también es importante!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>

      <div className="contenido">
        
        <div className='izquierda'>
          <h2>¿Quienes Somos?</h2>
          <p>CureFish es una empresa mexicana especializada en la importación de productos de 
            calidad para acuarios y acuicultura con más de 10 años de experiencia Contamos con 
            artículos, los cuales cuentan con la certificaciones de las normas oficiales mexicanas 
            aplicables, lo cual asegura que usted adquirirá sólo productos con los estánda calidad 
            más altos disponibles en el mercado. Le ofrecemos el mejor servicio, calidad de empaque, 
            inventarios suficientes para proveer todas las necesidades en el cuidado de sus peces.
            Presentando ahora el más novedoso diseño de una pecera inteligente capaz de monitorear 
            y alimentar automaticamente, lo que le facilitará el cuidado de sus mascotas</p>
        </div>


        <div className='derecha'>
        <p>aaaaa</p>
        </div>
       
      </div>
     
      <CDBContainer>
       
      </CDBContainer>


      <CDBFooter className="shadow">
        <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
         
           
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