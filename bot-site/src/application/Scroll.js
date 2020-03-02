import React, { Component} from 'react';
import ScrollButton from 'react-scroll-button';
import '../resources/App.css';

export default class Scroll extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <ScrollButton 
                behavior={'smooth'}
                buttonBackgroundColor={'transparent'}
                iconType={'arrow-down'}
            />
        );
    }
}