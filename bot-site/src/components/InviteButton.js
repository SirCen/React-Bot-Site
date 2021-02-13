import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import '../resources/App.css';


export default class InviteButton extends Component {
    handleOnClick(){
        window.open('https://discordapp.com/api/oauth2/authorize?client_id=608365015610949661&permissions=8&scope=bot','_blank', 'width=500,height=700,left=100,top=100');
    }
    render() {
        return (
            <div>
            <Button className="inviteBtn" onClick={this.handleOnClick}>Click here to Invite!</Button>
            </div>
        );
    }
}