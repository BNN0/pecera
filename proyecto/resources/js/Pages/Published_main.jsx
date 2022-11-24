import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';

import CardGroup from 'react-bootstrap/CardGroup';
import { CDBBtn, CDBContainer } from "cdbreact";

import { Head } from '@inertiajs/inertia-react';

function Publicaciones() {
    return (
        <>
            <Head title="Publicaciones" />
        
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
                        <CDBBtn color="primary" circle href="publiuno" >
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
                        <CDBBtn color="primary" circle href="#" >
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
                        <CDBBtn color="primary" circle href="#" >
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
                        <CDBBtn color="primary" circle href="#" >
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
                        <CDBBtn color="primary" circle href="#" >
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
                        <CDBBtn color="primary" circle href="#" >
                            Leer más
                        </CDBBtn>
                    </CDBContainer>
                </Card>
            </CardGroup>


        </>


    );

}

export default Publicaciones;