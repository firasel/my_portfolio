import React from 'react';
import Particles from 'react-particles-js';

const ParticleStyle = () => {
    return (
        <Particles params={{
            "particles":{
                "number":{
                    "value":80
                },
                "size":{
                    "value":7
                }
            },
            "interactivity":{
                "events":{
                    "onhover":{
                        "enable":true,
                        "mode":"repulse"
                    }
                }
            }
        }}
        style={{width:'100%',height:'100%',position:'absolute'}}
        />
    );
};

export default ParticleStyle;