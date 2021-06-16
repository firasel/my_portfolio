import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import BlogCard from '../BlogCard/BlogCard';

const Blog = () => {
    const [blogsData, setBlogsData] = useState();
    useEffect(() => {
        fetch('https://dev.to/api/articles?username=mdrasel')
        .then(res => res.json())
        .then(result => setBlogsData(result))
        .catch(error => console.log(error))
    },[])
    
    return (
        <div className='container pb-5'>
            <h3 className='text-center pageTitle'>Blogs</h3>
            <Row>
                {
                    blogsData?.map(data => <BlogCard key={data.id} blogData={data} />)
                }
            </Row>
        </div>
    );
};

export default Blog;