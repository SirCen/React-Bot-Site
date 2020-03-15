import React, { Component } from 'react';
import {Row, Card, Container} from 'react-bootstrap';
import '../resources/App.css';
import Invite from './Invite.js';
import Scroll from './Scroll.js';
import Commands from './Commands';

export default class HomePage extends Component {
  render() {
    return (
      <Container className="App">
        <Card className="App-header">
            <Row>
              <h1>Welcome to the Pub!</h1>
            </Row>
            <Row className="App-header-footer">
              <Scroll 
                id="section1"
              />
            </Row>
        </Card>
        <Card className="Section1" >
          <Row id="section1">
              <Invite
              title="Invite"
              subtitle="Bot Invite"
              dark={false}
            />
          </Row>
          <Row className="Section1-Footer">
            <Scroll
              id="section2"
            />
          </Row>
        </Card>
        <Card className="App-header" id="section2">
          <Commands
            title="Commands"
            subtitle="Commands for bot here"
          />
        </Card>
      </Container>
    );
  }
}

