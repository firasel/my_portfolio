import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './projects.css';

const Projects = () => {
    return (
        <div className='project'>
            <div className='container'>
                <h3 className='text-center m-4 pageTitle'>PROJECTS</h3>
                <Row className='d-md-flex align-items-center mb-4'>
                    <Col md={7} className='projectImg p-0'>
                        <img src="https://i.ibb.co/qFgZ2pV/photowala.jpg" alt="internet connection is low"/>
                    </Col>
                    <Col className='p-0' md={5} >
                        <div className='projectCard p-3'>
                            <h4 className='mt-2 mb-3'>PhotoWala</h4>
                            <p>This is a Photography Service web application.The user can order any service if he wants and he can only see his orders when he goes to the order history.</p>
                            <div className='technology'>
                                <Button variant='none' disable='true'>React.js</Button>
                                <Button variant='none' disable='true'>Node.js</Button>
                                <Button variant='none' disable='true'>Express.js</Button>
                                <Button variant='none' disable='true'>MongoDB</Button>
                                <Button variant='none' disable='true'>Firebase</Button>
                                <Button variant='none' disable='true'>Bootstrap</Button>
                                <Button variant='none' disable='true'>React-elastic-slider</Button>
                            </div>
                            <div className='pt-3'>
                                <a className='m-2' href='https://github.com/firasel/photowala-client-side' target='blank'><FontAwesomeIcon style={{fontSize:'2rem',color:'white'}} icon={faGithub}/></a>
                                <a className='m-2' href='https://photowala-8e5ab.web.app/' target='blank'><FontAwesomeIcon style={{fontSize:'2rem',color:'white'}} icon={faExternalLinkAlt}/></a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='d-md-flex align-items-center pt-4 mb-4'>
                    <Col md={7} className='projectImg p-0'>
                        <img src="https://i.ibb.co/JjK99bW/eGadgets.jpg" alt="internet connection is low"/>
                    </Col>
                    <Col className='p-0' md={5} >
                        <div className='projectCard p-3'>
                            <h4 className='mt-2 mb-3'>e-Gadgets</h4>
                            <p>This is a E-commerce Service web application.The user can order any product if he wants.</p>
                            <div className='technology'>
                                <Button variant='none' disable='true'>React.js</Button>
                                <Button variant='none' disable='true'>Node.js</Button>
                                <Button variant='none' disable='true'>Express.js</Button>
                                <Button variant='none' disable='true'>MongoDB</Button>
                                <Button variant='none' disable='true'>Firebase</Button>
                                <Button variant='none' disable='true'>Bootstrap</Button>
                                <Button variant='none' disable='true'>FontAwesome</Button>
                            </div>
                            <div className='pt-3'>
                                <a className='m-2' href='https://github.com/firasel/e-gadgets-client-side' target='blank'><FontAwesomeIcon style={{fontSize:'2rem',color:'white'}} icon={faGithub}/></a>
                                <a className='m-2' href='https://egadgets-fip.web.app/' target='blank'><FontAwesomeIcon style={{fontSize:'2rem',color:'white'}} icon={faExternalLinkAlt}/></a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='d-md-flex align-items-center pt-4 pb-5'>
                    <Col md={7} className='projectImg p-0'>
                        <img src="https://i.ibb.co/yBBTSfz/travel-Rider.jpg" alt="internet connection is low"/>
                    </Col>
                    <Col className='p-0' md={5} >
                        <div className='projectCard p-3'>
                            <h4 className='mt-2 mb-3'>TravelRiders</h4>
                            <p>This is a Rider Service web application The user select Destination and after select destination then shows all available service and see google maps</p>
                            <div className='technology'>
                                <Button variant='none' disable='true'>React.js</Button>
                                <Button variant='none' disable='true'>Firebase</Button>
                                <Button variant='none' disable='true'>Bootstrap</Button>
                                <Button variant='none' disable='true'>FontAwesome</Button>
                            </div>
                            <div className='pt-3'>
                                <a className='m-2' href='https://github.com/firasel/travel-riders' target='blank'><FontAwesomeIcon style={{fontSize:'2rem',color:'white'}} icon={faGithub}/></a>
                                <a className='m-2' href='https://travel-riders-firasel.web.app/' target='blank'><FontAwesomeIcon style={{fontSize:'2rem',color:'white'}} icon={faExternalLinkAlt}/></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Projects;