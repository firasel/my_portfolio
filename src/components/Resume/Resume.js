import React from 'react';
import { Button } from 'react-bootstrap';

const Resume = () => {
    return (
        <div className='container pb-5'>
            <h2 className='text-center pt-5 pb-5'>Resume</h2>
            <div style={{height:'55vh'}} className='text-center'>
                <a className='mr-3' href='https://drive.google.com/file/d/1Bd9AM9aDCjD_jr6rJpa0PxY3yVR-KmBh/view?usp=sharing' target='blank'>
                <Button className='mt-3 mb-2 p-2' variant='secondary'>See Resume</Button>
                </a>
                <a href='https://drive.google.com/u/0/uc?id=1Bd9AM9aDCjD_jr6rJpa0PxY3yVR-KmBh&export=download' target='blank'><Button className='mt-3 mb-2 p-2' variant='primary'>Download Resume</Button></a>
            </div>
        </div>
    );
};

export default Resume;