import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import beta from '/resources/img/beta.png'
import peces from "/resources/img/peces.png"
import uwu from "/resources/img/uwu.png"

import Card from 'react-bootstrap/Card';

import CardGroup from 'react-bootstrap/CardGroup';


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

          <Navbar.Brand  className='ms-3' href="/">CureFish</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
              <Button href='device' variant="outline-info">Modulo</Button>
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

      <div className='posts'>
        <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://estaticos.muyinteresante.es/media/cache/1000x_thumb/uploads/images/gallery/5a02f8d85cafe85f640fac80/pez-payaso-azul.jpg" />

                    <Card.Body>
                        <Card.Title>9 Consejos para el cuidado de peces</Card.Title>
                        <Card.Text>
                            Para todos aquellos que tienen peces en casa o estab pensando en adquirir alguno, les dejamos unos consejos generales sobre su cuidado.
                        </Card.Text>
                    </Card.Body>

                    <CDBContainer>
                        <CDBBtn color="primary" circle href="https://animalesexoticos24h.es/cuidar-peces-casa/#:~:text=Tenlo%20claro%20y%20mantenlos%20a,peces%20pero%20tampoco%20les%20sobrealimentes" >
                            Leer más
                        </CDBBtn>
                    </CDBContainer>

                </Card>
                <Card>
                    <Card.Img variant="top" src="https://estaticos.muyinteresante.es/media/cache/1000x_thumb/uploads/images/gallery/5a02f8d85cafe85f640fac80/pez-cebra.jpg" />
                    <Card.Body>
                        <Card.Title>Cómo cuidar los peces en casa correctamente</Card.Title>
                        <Card.Text>
                            Si deseas tener peces en casa, hay una serie de recomendaciones que debes seguir para cuidar los peces correctamente. La alimentación, la limpieza y el equipamiento del acuario son algunos de los aspectos que deberás tener más en cuenta.
                        </Card.Text>
                    </Card.Body>

                    <CDBContainer>
                        <CDBBtn color="primary" circle href="https://www.elespanol.com/como/cuidar-peces-casa-correctamente-acuario-pecera/519199214_0.amp.html" >
                            Leer más
                        </CDBBtn>
                    </CDBContainer>
                </Card>

                <Card>
                    <Card.Img variant="top" src="https://estaticos.muyinteresante.es/media/cache/1000x_thumb/uploads/images/gallery/5a02f8d85cafe85f640fac80/peces-corales.jpg" />
                    <Card.Body>
                        <Card.Title>10 tips para tener una pecera impactante</Card.Title>
                        <Card.Text>
                            ¿Te gustaría tener peces en casa? Expertos en la materia nos armaron una guía con las especies que conviene elegir y con varios recursos para embellecer nuestro acuario.
                        </Card.Text>
                    </Card.Body>

                    <CDBContainer>
                        <CDBBtn color="primary" circle href="https://www.clarin.com/entremujeres/hogar-y-familia/peces-pecera-acuario-plantas-accesorios-consejos-armar-instalar_0_rJfWyRFvXl.html" >
                            Leer más
                        </CDBBtn>
                    </CDBContainer>
                </Card>
            </CardGroup>


            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://estaticos.muyinteresante.es/media/cache/1000x_thumb/uploads/images/gallery/5a02f8d85cafe85f640fac80/pez-morado-amarillo.jpg" />
                    <Card.Body>
                        <Card.Title>7 trucos para tener peces más sanos</Card.Title>
                        <Card.Text>
                            Te presentamos una pequeña biblia, 7 trucos infalibles que harán que tus peces luzcan todo su colorido en muy poco tiempo y que además te costarán muy poco trabajo poner en práctica. ¿Empezamos?
                        </Card.Text>
                    </Card.Body>

                    <CDBContainer>
                        <CDBBtn color="primary" circle href="https://www.azureussl.com/7-trucos-para-tener-peces-mas-sanos/" >
                            Leer más
                        </CDBBtn>
                    </CDBContainer>
                </Card>

                <Card>
                    <Card.Img variant="top" src="https://estaticos.muyinteresante.es/media/cache/1000x_thumb/uploads/images/gallery/5a02f8d85cafe85f640fac80/peces-naranjas.jpg" />
                    <Card.Body>
                        <Card.Title>Cómo hacer una limpieza de peceras fácil y rápidamente</Card.Title>
                        <Card.Text>
                            ¡Dale a tus amigos acuáticos el ambiente limpio y libre de gérmenes que se merecen! Aprendé cómo limpiar una pecera correctamente, cómo desinfectarla y cómo mantener un acuario en buenas condiciones con esta guía completa.
                        </Card.Text>
                    </Card.Body>

                    <CDBContainer>
                        <CDBBtn color="primary" circle href="https://www.cleanipedia.com/ar/en-casa/como-desinfectar-una-pecera-facil-y-rapidamente.html" >
                            Leer más
                        </CDBBtn>
                    </CDBContainer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://estaticos.muyinteresante.es/media/cache/1000x_thumb/uploads/images/gallery/5a02f8d85cafe85f640fac80/peces-azules.jpg" />
                    <Card.Body>
                        <Card.Title>Peces de acuario: las diez especies favoritas</Card.Title>
                        <Card.Text>
                            La tenencia de peces ornamentales está en auge, y no es de extrañar, pues la visión del colorido mundo acuático y sus tonalidades en tu propia sala de estar es fascinante, además de tener un efecto tranquilizador y relajante. ¿Pero cuáles son los peces de acuario ideales para ti? Aquí te presentamos las diez especies de peces de agua dulce favoritos.
                        </Card.Text>
                    </Card.Body>

                    <CDBContainer>
                        <CDBBtn color="primary" circle href="https://www.zooplus.es/magazine/peces/tipos-de-peces/peces-de-acuario-diez-especies-favoritas" >
                            Leer más
                        </CDBBtn>
                    </CDBContainer>
                </Card>
            </CardGroup>
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