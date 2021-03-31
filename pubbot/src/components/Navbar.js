import React, {useState} from 'react';
import logo from '../assets/PubBotLogo.png';

export default function Navbar() {
    const [isOpen, isClosed] = useState(false);
    //const logo = require('../assets/PubBotLogo.png')
    return (
        <>
        <nav className="flex items-center justify between flex-wrap bg-gray-700 text-gray-300">
            <div className="container mx-auto flex flex-wrap items-center flex-shrink-0">
                <div className="w-full relative flex justify-between">
                    <a className="leading-relaxed inline-block py-2 left"
                    href="/"><img className="object-contain"src={logo} alt="PubBot Logo" ></img>
                    </a>
                    <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onClick={() => isClosed(!isOpen)}>
                        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (isOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none mr-auto">
                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                <i className="fab text-lg leading-lg text-white opacity-75" /> <span className="ml-2">About</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                <span className="ml-2">Invite</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                <span className="ml-2">Commands</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                <span className="ml-2">Support</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
        
    );
}