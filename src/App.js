import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import logo from './/assets/images/logo.png';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Sunday',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
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
              <Nav className="ms-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">BOARDS</Link>
                <Link className="nav-link" to="/contact">VIDEOS</Link>
                <Link className="nav-link" to="/contact">CONTACT</Link>
                <Link className="nav-link" to="/contact">ABOUT</Link>

              </Nav>
              
            </Navbar.Collapse>
            <Link to="/buildE/" className="ml-auto">
                        <img src={logo}

                            width="120px"
                            height="100%"
                            className="cd-inline-block align-top"
                            alt="" />
                    </Link>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.BOARDS.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          
     
            
        </Container>
      </Router>
    );
  }
}

export default App;
