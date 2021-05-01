import React from 'react';
import About from '../../About/About';
import Blog from '../../Blog/Blog';
import Contact from '../../Contact/Contact';
import Projects from '../../Projects/Projects';
import Header from '../Header/Header';

const Home = () => {
    return (
        <>
            <Header/>
            <About/>
            <Projects/>
            <Blog/>
            <Contact/>
        </>
    );
};

export default Home;