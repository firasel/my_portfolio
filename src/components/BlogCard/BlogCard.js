import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const BlogCard = ({blogData}) => {
    const {cover_image, title, description, url}=blogData;
    return (
        <Col className='p-3 m-auto m-md-0' xs={11} sm={9} md={6} lg={4}>
            <Card className='shadow' style={{ width: '100%',border:'0'}}>
                <Card.Img variant="top" src={cover_image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button target='blank' href={url} variant="primary">Learn More...</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BlogCard;