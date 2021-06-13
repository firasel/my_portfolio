import React, { useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Blog = () => {

    useEffect(() => {
        fetch('https://dev.to/api/articles/me/all',{
            method:'GET',
            headers: {'api-key' : 'X5tbGjDBVmAfMjKQywvkVPHp'}
        })
        .then(res => res.json())
        .then(result => console.log(result))
    },[])
    
    return (
        <div className='container pb-5'>
            <h3 className='text-center pageTitle'>Blogs</h3>
            <Row>
                <Col className='p-3 m-auto m-md-0' xs={10} sm={8} md={4}>
                <Card className='shadow' style={{ width: '100%',border:'0'}}>
                    <Card.Img variant="top" src="https://i.ibb.co/ZhkYs6f/react.png" />
                    <Card.Body>
                        <Card.Title>Simple Introduction to React.js</Card.Title>
                        <Card.Text>
                            React is a library that used to create awesome user interface.
                        </Card.Text>
                        <Button onClick={()=>alert('Feature is not available')} variant="primary">Learn More...</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col className='p-3 m-auto m-md-0' xs={10} sm={8} md={4}>
                <Card className='shadow' style={{ width: '100%',border:'0'}}>
                    <Card.Img variant="top" src="https://i.ibb.co/ZhkYs6f/react.png" />
                    <Card.Body>
                        <Card.Title>Simple Introduction to React.js</Card.Title>
                        <Card.Text>
                            React is a library that used to create awesome user interface.
                        </Card.Text>
                        <Button onClick={()=>alert('Feature is not available')} variant="primary">Learn More...</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col className='p-3 m-auto m-md-0' xs={10} sm={8} md={4}>
                <Card className='shadow' style={{ width: '100%',border:'0'}}>
                    <Card.Img variant="top" src="https://i.ibb.co/ZhkYs6f/react.png" />
                    <Card.Body>
                        <Card.Title>Simple Introduction to React.js</Card.Title>
                        <Card.Text>
                            React is a library that used to create awesome user interface.
                        </Card.Text>
                        <Button onClick={()=>alert('Feature is not available')} variant="primary">Learn More...</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Blog;