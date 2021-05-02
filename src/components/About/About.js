import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import ParticleStyle from '../ParticleStyle/ParticleStyle';
import './About.css';

const About = () => {
    return (
        <div style={{background:'#184042',position:'relative',overflow:'hidden'}}>
            <ParticleStyle/>
            <div style={{width:'100%',color:'white'}}>
                <div className='container'>
                    <Row>
                        <Col className='aboutImg p-4 m-auto m-md-0' xs={10} sm={8} md={6}>
                            <img style={{width:'100%',border:'3px solid #184042'}} src="https://i.ibb.co/F5jqJZN/profile-Img1.png" alt="my about"/>
                        </Col>
                        <Col style={{background:'#1840428c'}} className='aboutMsg m-auto m-md-0 p-5' xs={10} sm={8} md={6}>
                            <h2 className='mt-4'>About Me</h2>
                            <p className='mt-4'>I am a Web developer. I build websites and web applications. I am comfortable with programming language in JavaScript. I also have experience working with Reactjs and Node js. I care about writing clean code. I am always dedicated and hardworking. I am always interested in learning new technology. </p>
                            <div className='d-flex align-items-center pt-4'>
                                <h5 className='p-0 pr-2 m-0'>Name: </h5>
                                <p className='p-0 m-0'> Md Rasel</p>
                            </div>
                            <div className='d-flex align-items-center pt-4'>
                                <h5 className='p-0 pr-2 m-0'>Date of Birth: </h5>
                                <p className='p-0 m-0'> November 19</p>
                            </div>
                            <div className='d-flex align-items-center pt-4'>
                                <h5 className='p-0 pr-2 m-0'>Address: </h5>
                                <p className='p-0 m-0'> Bangladesh, Chittagong, Rangunia</p>
                            </div>
                            <div className='d-flex align-items-center pt-4'>
                                <h5 className='p-0 pr-2 m-0'>Email: </h5>
                                <p className='p-0 m-0'> mdrasel601390@gmail.com</p>
                            </div>
                            <div className='d-flex align-items-center pt-4 pb-4'>
                                <h5 className='p-0 pr-2 m-0'>Phone: </h5>
                                <p className='p-0 m-0'> +8801619601390</p>
                            </div>
                            <a href='https://drive.google.com/u/0/uc?id=1Bd9AM9aDCjD_jr6rJpa0PxY3yVR-KmBh&export=download' target='blank'>
                                <Button className='mt-3 mb-2 p-2' style={{padding:'0.8rem !important',fontSize:'20px'}} variant='primary'>
                                    <FontAwesomeIcon style={{paddingRight:'5px',fontSize:'1.8rem'}} icon={faFileDownload} />
                                    Download Resume
                                </Button>
                            </a>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default About;