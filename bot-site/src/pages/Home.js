import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import '../resources/App.css';
import NavBar from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class HomePage extends Component {
  render() {
    return (
      <Container fluid="true" className="App">
        <NavBar />
        
      </Container>
    );
  }
}

