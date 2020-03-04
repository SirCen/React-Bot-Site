import React, { Component } from 'react';
import {Row, Card, Container} from 'react-bootstrap';
import '../resources/App.css';
import Section from './Section.js';
import Scroll from './Scroll.js';

export default class HomePage extends Component {
  render() {
    return (
      <Container className="App">
        <Card className="App-header">
            <Row>
              <h1>Welcome to the Pub!</h1>
            </Row>
            <Row className="App-header-footer">
              <Scroll />
            </Row>
        </Card>
        <Card>
          <Section 
            title="Invite"
            subtitle="Bot Invite"
            dark={true}
            id="section1"
            />
        </Card>
      </Container>
    );
  }
}

