/*import React from 'react'

const Footer=()=>{


    return(
        <>
        <div>
        <h1>Footer Page</h1>
        </div>
        </>
    )
}

export default Footer;
*/

/*
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black rounded-lg text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

    
        <div className="space-y-4 rounded-lg bg-gray-800 p-6">
          <h1 className="text-2xl font-bold">Reactive</h1>
          <div className="space-y-2">
            <ul className='list-none mb-10'>
                <li>            <a href="#features" className="text-gray-300 hover:text-white transition duration-300">Features</a></li>
                <li>      <a href="#info" className="text-gray-300 hover:text-white transition duration-300">Info Centre</a></li>
                <li>      <a href="#blog" className="text-gray-300 hover:text-white transition duration-300">New Blog</a></li>
                <li>  <a href="#login" className="text-gray-300 hover:text-white transition duration-300">Login</a></li>
            </ul>

          </div>
        </div>

    
        <div className="space-y-4 rounded-lg bg-gray-800 p-6">
          <h2 className="text-xl font-semibold">Company</h2>
          <div className="space-y-2">
            <a href="#about-us" className="text-gray-300 hover:text-white transition duration-300">About Us</a>
            <a href="#terms" className="text-gray-300 hover:text-white transition duration-300">Terms and Conditions</a>
            <a href="#privacy" className="text-gray-300 hover:text-white transition duration-300">Privacy Policy</a>
            <a href="#careers" className="text-gray-300 hover:text-white transition duration-300">Careers</a>
          </div>
        </div>

        
        <div className="space-y-4 rounded-lg bg-gray-800 p-6">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="text-gray-300">Get in touch with us for inquiries, support, or any other questions.</p>
          <div className="space-y-2">
            <a href="mailto:support@reactive.com" className="text-gray-300 hover:text-white transition duration-300">Email: support@reactive.com</a>
            <a href="tel:+123456789" className="text-gray-300 hover:text-white transition duration-300">Phone: +123 456 789</a>
            <a href="https://www.google.com/maps" className="text-gray-300 hover:text-white transition duration-300">Visit us</a>
          </div>
        </div>

        <div className="space-y-4 rounded-lg bg-gray-800 p-6">
          <h2 className="text-xl font-semibold">Tech Support</h2>
          <div className="space-y-2">
            <p className="text-gray-300">Need technical support? We are here to assist you!</p>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-300 hover:text-white transition duration-300">Contact Support</li>
              <li className="text-gray-300 hover:text-white transition duration-300">Activate Account</li>
              <li className="text-gray-300 hover:text-white transition duration-300">Software Updates</li>
              <li className="text-gray-300 hover:text-white transition duration-300">Troubleshooting</li>
            </ul>
          </div>
        </div>

      </div>

      <div className="bg-gray-900 py-4 mt-8">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Reactive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { CiText } from "react-icons/ci";
<CiText />

*/
import React from 'react';
import { CiText } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-gray-100 rounded-lg text-white py-8">
      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className='flex flex-wrap gap-3'>
                       <CiText className='bg-orange-500 w-12 h-12 rounded-full overflow-hidden top-[-3] item-center top-[3] mr-[10px]' size={30} />
                       <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4'>Trendify</h1>
                     </span>
            </a>
            <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Customer Service</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">About Us</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Contact</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Careers</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Store Locators</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Legal</h2>
              <nav class="list-none mb-10">
              <li>
                  <a class="text-gray-600 hover:text-gray-800">Order Status</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">FAQ</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Shipping Information</a>
                </li>
               
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav class="list-none mb-10">
              <li>
                  <a class="text-gray-600 hover:text-gray-800">Terms & Conditions</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Cookie Policy</a>
                </li>
               
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-gray-300">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a class="text-white-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-white-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-white-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-white-500">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
