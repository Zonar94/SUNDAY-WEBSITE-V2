import React from 'react';
import Hero from '../components/Hero';
import Skateboards from '../components/Skateboards'

function Gear(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
           <Skateboards />
            
        </div>
    );

}

export default Gear;