import React from 'react';
import Skateboards from '../components/Skateboards'
import Hero from '../components/Hero';



function HomePage(props) {                     //this loads the Homepage and the props. The props are the jumbotron and skateboard titles
 
    return(
        <div>           {/*Puts the hero component into the homepage*/}
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />       
             {/*Puts the skateboard components into the homepage*/}
            <Skateboards/>
        </div>
    );

}

export default HomePage;