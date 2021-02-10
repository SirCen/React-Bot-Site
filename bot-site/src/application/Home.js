import React, { Component } from 'react';
import {Row, Card, Container} from 'react-bootstrap';
import '../resources/App.css';
import Invite from './Invite.js';
import Scroll from './Scroll.js';
import Commands from './Commands';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class HomePage extends Component {
  render() {
    return (
      <Container fluid="true" className="App body">
        <NavBar />
        <Card fluid="true" className="App-header">        
            <Row>
              <h1>Welcome to the Pub!</h1>
            </Row>
            <Row>
              <img src={require('../assets/cswip.jpg')} alt=''></img>
            </Row>
            <Row className="App-header-footer">
              <Scroll 
                id="section1"
              />
            </Row>
        </Card>
        <Card fluid="true" className="Section1" >
          <Row id="section1">
              <Invite
              title="Invite"
              subtitle="Bot Invite"
              dark={false}
            />
          </Row>
          <Card.Footer className="Section1-Footer">
            <Scroll
              id="section2"
            />
          </Card.Footer>
        </Card>
        <Card fluid="true" className="App-header" id="section2">
          <Commands
            title="Commands"
            subtitle="Commands for bot here"
          />
        </Card>
      </Container>
    );
  }
}

