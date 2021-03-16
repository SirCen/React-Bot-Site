import React from 'react';
import Home from './pages/Home';
import Invite from './pages/Invite';
import NavBar from './components/NavBar.js';
import './resources/index.css';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

class App extends React.Component {
    constructor() {
      super()
      this.state = {}
    }
 
    // setup website routes
    render() {
      return (
        <BrowserRouter>
         <div>
           <NavBar />
           <Switch>
             <Route exact path="/" component={Home} />
             <Route exact path="/invite" component={Invite}/>
           </Switch>      
         </div>
        </BrowserRouter>
      )
    }
 } 
 
 export default App;