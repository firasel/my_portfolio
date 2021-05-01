import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Contact.css';

const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = ( data,e )=> {
        emailjs.sendForm('gmailMessage', 'template_qgcdpyg', e.target, 'user_e1e1yJpjMottSN0H92AC3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className='container pb-5'>
            <h2 className='text-center pt-5 pb-5'>Contact Us</h2>
            <Row>
                <Col className='m-auto m-md-0 shadow contactForm' xs={10} sm={9} md={6}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Control {...register("name", { required: true })} type="text" placeholder="Enter Your Name" />
                        {errors.name && <span className='text-danger'>Name is required</span>}
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control {...register("email", { required: true })} type="email" placeholder="Enter email" />
                        {errors.email && <span className='text-danger'>email is required</span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control {...register("subject", { required: true })} type="text" placeholder="Enter Subject" />
                        {errors.subject && <span className='text-danger'>Subject is required</span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control {...register("message", { required: true })}  as="textarea" rows={4} placeholder="Enter Your Message" />
                        {errors.message && <span className='text-danger'>Message is required</span>}
                    </Form.Group>
                    <div className='text-center'>
                        <Button className='submitBtn' variant="none" type="submit">Send Message</Button>
                    </div>
                </Form>
                </Col>
                <Col className='m-auto m-md-0' xs={10} sm={9} md={6}>
                    <div className='d-flex align-items-center pt-4'>
                        <h5 className='p-0 pr-2 m-0'>
                            <FontAwesomeIcon style={{fontSize:'1.5rem'}} icon={faMapMarkerAlt} />
                        </h5>
                        <p className='p-0 m-0'> Bangladesh, Chittagong, Rangunia</p>
                    </div>
                    <div className='d-flex align-items-center pt-4'>
                        <h5 className='p-0 pr-2 m-0'>
                            <FontAwesomeIcon style={{fontSize:'1.5rem'}} icon={faEnvelope} />
                        </h5>
                        <p className='p-0 m-0'> mdrasel601390@gmail.com</p>
                    </div>
                    <div className='d-flex align-items-center pt-4 pb-4'>
                        <h5 className='p-0 pr-2 m-0'>
                            <FontAwesomeIcon style={{fontSize:'1.5rem'}} icon={faPhoneAlt} />
                        </h5>
                        <p className='p-0 m-0'> +8801619601390</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;