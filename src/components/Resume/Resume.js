import { faExternalLinkAlt, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import ParticleStyle from '../ParticleStyle/ParticleStyle';

const Resume = () => {
    return (
        <div style={{background:'black',position:'relative'}}>
            <ParticleStyle/>
            <div style={{width:'100%'}}>
                <div className='container pb-5 text-white'>
                    <Row>
                        <Col className='m-auto' xs={11} sm={10} md={8} lg={8}>
                            <h2 className='text-center pt-5 pb-5'>Resume</h2>
                            <div style={{height:'55vh'}} className='text-center'>
                                <a className='mr-3' href='https://drive.google.com/file/d/1Bd9AM9aDCjD_jr6rJpa0PxY3yVR-KmBh/view?usp=sharing' target='blank'>
                                    <Button style={{padding:'1rem !important',fontSize:'20px',fontWeight:'600'}} className='mt-3 mb-2 p-2' variant='secondary'>
                                        <FontAwesomeIcon style={{paddingRight:'5px',fontSize:'1.8rem'}} icon={faExternalLinkAlt} />
                                        View Resume
                                    </Button>
                                </a>
                                <a href='https://drive.google.com/u/0/uc?id=1Bd9AM9aDCjD_jr6rJpa0PxY3yVR-KmBh&export=download' target='blank'>
                                    <Button className='mt-3 mb-2 p-2' style={{padding:'1rem !important',fontSize:'20px',fontWeight:'600'}} variant='primary'>
                                        <FontAwesomeIcon style={{paddingRight:'5px',fontSize:'1.8rem'}} icon={faFileDownload} />
                                    Download Resume
                                    </Button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Resume;