import React from 'react';
import card1 from '../assets/images/card1.png';
import card2 from '../assets/images/card2.png';
import card3 from '../assets/images/card3.png';
import card4 from '../assets/images/card4.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


export default class skateboard extends React.Component {
    render(){
        return (
            <Container>
                <Row className="carousel2" id="carousel12">
                    <Col sm={8}>
                    {/*Puts the images in the the columns*/}
                    <img className="skateboards1" src={card1} />
                    <img className="skateboards1" src={card2} />   
                    </Col>                  
                    <Col sm={4}>
                         {/*Puts the images in the the columns*/}
                <img className="skateboards2" src={card3} />
                    <img className="skateboards2" src={card4} />
                    </Col>
                </Row>
            </Container>
        )
    } 
}
