import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';


function NavScrollExample() {
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
                <Nav.Link href="#action1">Publicaciones</Nav.Link>
                <Nav.Link href="#action2">Monitoreo</Nav.Link>
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

          <Navbar.Brand className='ms-3' href="#">Peceras</Navbar.Brand>
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


      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
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

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        <h2 > Conocenos <Badge bg="secondary">Ahora</Badge></h2>
      </div>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>¿Quienes somos?</Accordion.Header>
          <Accordion.Body>
          <p>CureFish es una empresa mexicana especializada en la importación de productos de calidad para acuarios y acuicultura con más de 10 años de experiencia.</p>

          <p>Contamos con artículos, los cuales cuentan con la certificaciones de las normas oficiales mexicanas aplicables, lo cual asegura que usted adquirirá sólo productos con los estándares de calidad más altos disponibles en el mercado. Le ofrecemos el mejor servicio, calidad de empaque, inventarios suficientes para proveer todas las necesidades en el cuidado de sus peces.</p>

          <p>presentando ahora el más novedoso diseño de una pecera inteligente capaz de monitorear y alimentar automaticamente lo que le facilitara el cuidado de sus mascotas.</p>

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Tips y más sobre el cuidado de tus peces</Accordion.Header>
          <Accordion.Body>
            <h6>Información:</h6> <p>Antes de nada, acude a un centro veterinario especializado para informarte de los cuidados que requiere esa especie en concreto, y no te lances si no estás seguro de poder cumplir con todo lo necesario.</p> 
            <h6>Acuario:</h6> <p>El tamaño del acuario es tan importante como para nosotros el de nuestra cama. Busca acuarios adecuados para las especies que quieres tener. Recuerda, siempre ir al tamaño más grande que te puedas permitir.</p> 
            <h6>Agua limpia:</h6> <p>A todos nos gusta tener nuestra casa limpia, ¿verdad? Procura mantener el agua de los peces en perfecto estado para que puedan estar cómodos y disfrutar. Además la calidad del agua va a determinar el buen estado de salud del pez.</p>
            <h6>Renovación del agua:</h6> <p>Se recomienda cambiar el 30% del agua de la pecera un par de veces por semana.</p>
            <h6>Bomba de aire y filtro:</h6> <p>Los peces respiran oxígeno del agua, por lo que es esencial que tengan todo el que necesitan. Infórmate de qué necesita tu pez e instala la bomba necesaria.  Dependiendo de especies y tamaño también puede ser que necesites un filtro que depure y oxigene el agua.</p>
            <h6>Temperatura:</h6> <p>¿Son peces de agua fría o de agua cálida? Tenlo claro y mantenlos a la temperatura adecuada.</p>
            <h6>Iluminación:</h6> <p>No dejes que estén siempre a oscuras, los peces también necesitan recibir luz y será tu labor proporcionársela. Si vas a tener plantas este punto también es muy relevante.</p>
            <h6>Alimentación:</h6> <p>Da de comer a tus peces pero tampoco les sobrealimentes. Busca la mejor alimentación para ellos y sigue las recomendaciones en cuanto a cantidades.</p>
            <h6>Veterinario:</h6> <p>Acude a tu clínica veterinaria siempre que sea necesario, resuelve dudas y cuida del animal evitando que enferme.</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>


    </>


  );
}

export default NavScrollExample;