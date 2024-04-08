import React from 'react';
import { Link } from 'react-router-dom';
import 'daisyui/dist/full.css';
import './Option.css';
import { motion } from "framer-motion";

const Option: React.FC = () => {

    return(

        <div className='max-w-md mx-auto mt-10 p-4 font-comfortaa flex flex-col justify-center'>
            {/* bekindly */}
            <motion.div 
            className='title flex justify-center text-5xl m-2 p-5'
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ type: "spring", delay:2, stiffness: 260, damping: 200 }} 
            >BeKindly
            </motion.div>

            {/* logo */}
            <motion.img 
            src="src/assets/bekindlylogo.svg" 
            alt="BeKindlyLogo"
            className="container p-2"
            initial={{ y:600, scale: 0 }}
            animate={{ y:0, rotate: 360, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, velocity:50, damping: 100 }} 
            />
            
            {/* today */}
            <motion.div 
            className='title flex justify-center text-5xl m-2 p-5'
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ type: "spring", delay:2, stiffness: 260, damping: 200 }} 
            >Today
            </motion.div>

            {/* login button */}
            {/* <motion.Link 
            to="/home" 
            className="login-btn btn-block rounded-full text-xl bg-[#227C9D] text-white border-none transition-colors duration-300 hover:bg-[#1C6F87]" 
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ type: "spring", delay:2.8, stiffness: 260, damping: 200 }} >
               Login
            </motion.Link> */}
            <motion.div
                className="login-btn btn-block rounded-full text-xl bg-[#227C9D] text-white border-none transition-colors duration-300 hover:bg-[#1C6F87]" 
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ type: "spring", delay:2.8, stiffness: 260, damping: 200 }}>
                <Link to="/home" className="btn btn-block rounded-full text-xl bg-[#227C9D] text-white border-none transition-colors duration-300 hover:bg-[#1C6F87]">
                    Login
                </Link>
            </motion.div>
                

        </div>

        
    )
}

export default Option