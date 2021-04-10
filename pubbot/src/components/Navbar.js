import React, {useState} from 'react';
import logo from '../assets/Chris_logo_file.svg';

export default function Navbar() {
    const [isOpen, isClosed] = useState(false);
    const [isDropped, notDropped] = useState(false);
    return (
        <div>
          <nav class="bg-gray-700  drop-shadow-2xl">
            <div class="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
              <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <img class="h-8 w-8" src={logo} alt="PubBot Logo" />
                  </div>
                  <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                      <a href="/" class="text-gray-300  hover:text-green-300 px-3 py-2 rounded-md text-m font-medium font-sans">About</a>
        
                      <a href="/" class="text-gray-300  hover:text-green-300 px-3 py-2 rounded-md text-m font-medium font-sans">Invite</a>
                      <div>
                        <div>
                          <span>
                            <button  type="button" id="command-menu" onClick={()=> notDropped(!isDropped)} class="text-gray-300 hover:text-green-300 px-5 py-2 text-m font-medium font-sans">
                              Commands
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                              </svg>
                            </button>
                            
                          </span>
                          <div className={
                          (isDropped ? "block " : "hidden ") +
                          "origin-bottom-left text-center absolute z-10 w-40 rounded-md shadow-lg py-1 bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none"} role="menu" aria-orientation="vertical" aria-labelledby="command-menu">
                            <a href="/" class="block px-4 py-2 text-m text-gray-300 hover:text-green-300 font-sans font-medium" role="menuitem">Admin</a>
                            <a href="/" class="block px-4 py-2 text-m text-gray-300 hover:text-green-300 font-sans font-medium" role="menuitem">Fun</a>
                            <a href="/" class="block px-4 py-2 text-m text-gray-300 hover:text-green-300 font-sans font-medium" role="menuitem">Music</a>
                            <a href="/" class="block px-4 py-2 text-m text-gray-300 hover:text-green-300 font-sans font-medium" role="menuitem">Translate</a>
                            <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
                              <a href="/" class="block px-4 py-2 text-m text-gray-300 hover:text-green-300 font-sans font-medium" role="menuitem">All</a>
                          </div>
                        </div>
                      </div>
                      <a href="/" class="text-gray-300  hover:text-green-300 px-3 py-2 rounded-md text-m font-sans font-medium">Support</a>
                    </div>
                  </div>
                </div>
                <div class="hidden md:block">
                  <div class="ml-4 flex items-center md:ml-6">
                    <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-green-300 px-3 py-2 rounded-md text-sm font-medium">Login</a>
                    
                  </div>
                </div>
                
                <div class="-mr-2 p-2 flex md:hidden">
                  {/* <!-- Mobile menu button --> */}
                  <button type="button" class="bg-gray-800 inline-flex items-center justify-center p-2  rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" onClick={()=> isClosed(!isOpen)} aria-expanded="false">
                    {/* <!--
                      Heroicon name: outline/menu
        
                      Menu open: "hidden", Menu closed: "block"
                    --> */}
                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    {/* <!--
                      Heroicon name: outline/x
        
                      Menu open: "block", Menu closed: "hidden"
                    --> */}
                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
        
            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div class={isOpen ? " flex" : " hidden"}  id="mobile-menu">
              <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-green-300 block px-3 py-2 rounded-md text-base font-medium">About</a>
        
                <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-green-300 block px-3 py-2 rounded-md text-base font-medium">Invite</a>
        
                <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-green-300 block px-3 py-2 rounded-md text-base font-medium">Commands</a>
        
                <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-green-300 block px-3 py-2 rounded-md text-base font-medium">Support</a>

                <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-green-300 block px-3 py-2 rounded-md text-base font-medium">Login</a>
                    
              </div>
            </div>
            <div className="h-0 border border-solid border-t-0 border-blueGray-800 opacity-10 shadow-2xl" />
          </nav>
        </div>
        
    );
}