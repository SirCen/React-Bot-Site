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
              <Scroll 
                id="section1"
              />
            </Row>
        </Card>
        <Card className="Section1" id="section1">
          <Row> 
            <Section
              title="Invite"
              subtitle="Bot Invite"
              dark={true}
            />
          </Row>
          <Row class="Section1-Footer">
            <Scroll
              id="section2"
            />
          </Row>
        </Card>
        <Card className="App-header" id="section2">
          <Section
            title="Commands"
            subtitle="Commands for bot here"
            dark={true}
          />
        </Card>
      </Container>
    );
  }
}

