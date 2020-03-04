import React, { Component} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../resources/App.css';

export default class Scroll extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
      };
    render() {
        return (
            <div>
                <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                > <div class="border-arrow curvy curvy-inside flat-back"></div>
                </Link>
            </div>
        );
    }
}