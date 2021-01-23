 /*Imports react*/
import React from 'react';
 /*Imports browser router as router, route and link from react-router-dom*/
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
 /*Import container from react/bootstrap/container*/
import Container from 'react-bootstrap/Container';
 /*Imports the navbar from react-bootstrap/navbar*/
import Navbar from 'react-bootstrap/Navbar';
/*Imports nav from react-boostrap/nav*/
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Gear from './pages/Gear';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import logo from './/assets/images/logo.png';


class App extends React.Component {
   /*Creates props for the navbar buttons*/
  constructor(props) {
    super(props);
    this.state = {
      title: 'Sunday',
       /*These are the button props and paths*/
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'BOARDS', path: '/Gear' },
        { title: 'VIDEOS', path: '/videos' },
        { title: 'ABOUT', path: '/about' },
      ],
       /*This is backwards skip button*/
      home: {
        title: 'WELCOME TO SUNDAY',
        subTitle: 'Welcome to my home page, below are different pages where you can see Sunday Boards, Merchandise and more.',
        
      },
      
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="auto">
                <Link className="nav-link" to="/">HOME</Link>
                <Link className="nav-link" to="/gear">BOARDS</Link>
                <Link className="nav-link" to="/contact">VIDEOS</Link>
                <Link className="nav-link" to="/ABOUT">ABOUT</Link>

              </Nav>
              
            </Navbar.Collapse>
            <Link to="Home" className="ms-auto">
                        <img src={logo}

                            width="120px"
                            height="100%"
                            className=""
                            alt="" />
                    </Link>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/gear" render={() => <gear title={this.state.gear.title} />} />
          <Route path="/VIDEOS" render={() => <Gear title={this.state.contact.title} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          
          
     
            
        </Container>
      </Router>
    );
  }
}

export default App;
