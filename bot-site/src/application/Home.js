import React, { Component } from 'react';
import {Row} from 'react-bootstrap';
import '../resources/App.css';
import Navbar from './Navbar.js';
import Section from './Section.js';
// import Scroll from './Scroll.js';

export default class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <div className="App-header">
            <body>
              <h1>Welcome to the Pub!</h1>
            </body>
            <div style={{bottom : 0}}>
              <Navbar />
            </div>
          </div>
        </Row>
        <Section 
          title="Section 1"
          subtitle="hi"
          dark={true}
          id="section1"
          />
      </div>  
    );
  }
}

