import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div style={{background:'#000000'}}>
            <div className='container text-center p-4'>
                <div className='p-3 mt-2 mb-3'>
                    <a className='m-2' href='https://github.com/firasel/' target='blank'><FontAwesomeIcon style={{fontSize:'2rem',color:'white'}} icon={faGithub}/></a>
                    <a className='m-2' href='https://www.facebook.com/profile.php?id=100012203387058' target='blank'><FontAwesomeIcon style={{fontSize:'2rem',color:'white'}} icon={faFacebook}/></a>
                    <a className='m-2' href='https://www.linkedin.com/in/md-rasel-788545183/' target='blank'><FontAwesomeIcon style={{fontSize:'2rem',color:'white'}} icon={faLinkedin}/></a>
                </div>
                <span className='text-muted pb-2'>Copyright &copy;2021 All rights reserved | This website is made by Md Rasel</span>
            </div>
        </div>
    );
};

export default Footer;