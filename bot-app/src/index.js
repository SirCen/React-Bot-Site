import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


class home extends React.Component {
    constructor(){
        
    }
    render() {
        return (
            <div class="flex-item">
            <div>
                <h1 class="ariel" style="font-size:60px;"><span style="color: #ffffff;">BOT_NAME</span></h1>
                <div class="ariel" style="font-size:40px;"><span style="color: #ffffff;">BOT_SUBTITLE</span></div>
                <p><button class="btn"><a href="invite_link">Invite</a></button>&nbsp; &nbsp;<button class="btn"><a href="support_server_link">Support</a></button>&nbsp; &nbsp;<button class="btn"><a href="commands.html">Commands</a></button></p>
            </div>
            </div>
        );
    }
}
ReactDOM.render(home, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
