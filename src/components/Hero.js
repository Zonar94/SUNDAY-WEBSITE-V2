import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {

    return(
        <Jumbotron className="lg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="jumbotron1">
                    <Col md={10} md={10}>
                        { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }
                        { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

}


export default Hero;