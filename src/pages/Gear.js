import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel'
import nextcards from '../components/nextcards'

function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            
            <nextcards/>
        </div>
    );

}

export default HomePage;