// components/Navbar.js or components/Navbar.jsx
import { Link } from 'react-router-dom';
//import React from 'react';
import { BsCalendar4 } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
//import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using routing

function Navbar() {
  return (
    <nav className="flex w-full h-24 text-2xl px-5 justify-between items-center" style={{ backgroundColor: '#2485A9', color: '#ffffff' }}>
      <Link to="/" className='inline-block border-none hover:bg-transparent p-2 rounded-lg'><img className='border-none hover:opacity-75' style={{ width: '80px', height: '80px' }} src={'src/assets/logo.png'} alt='logo' /></Link>
      <h1 className="text-5xl">BeKindly</h1>
      <div className="flex items-center ">
          <Link to="/calendar"><div className="btn text-5xl text-white pr-4 bg-transparent border-hidden hover:bg-transparent hover:opacity-75"><BsCalendar4 /></div></Link>
          <div className="btn text-5xl text-white bg-transparent border-hidden hover:bg-transparent hover:opacity-75"><BsPersonCircle /></div>
      </div>
    </nav>

    // -- OLD VERSION --
    // <nav className="flex w-full h-24 text-2xl px-5 justify-between items-center text-white" style={{ backgroundColor: '#227C9D' }}>
    //   <img src="/src/assets/logo.png" alt="Logo" className="w-16 h-16" />
    //   <h1 className='text-5xl'>BeKindly</h1>
    //   <div className="flex items-center">
    //     <div className="text-6xl text-black mr-4">
    //       <svg
    //         className="fill-current"
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 24 24"
    //         width="24"
    //         height="24"
    //       >
    //         <path d="M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm0-18c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 13h-1v-1c0-.552-.448-1-1-1s-1 .448-1 1v1H8c-.552 0-1-.448-1-1s.448-1 1-1h1v-1c0-.552.448-1 1-1s1 .448 1 1v1h1c.552 0 1 .448 1 1s-.448 1-1 1z"/>
    //       </svg>
    //     </div>
    //     <div className="rounded-full bg-gray-700 w-14 h-14"></div>
    //   </div>
    // </nav>
  );
}

export default Navbar;

