import React from 'react';
import Skateboards from '../components/Skateboards'
import Hero from '../components/Hero';



function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            
            <Skateboards/>
        </div>
    );

}

export default HomePage;