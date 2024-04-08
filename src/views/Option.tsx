import React from 'react';
import 'daisyui/dist/full.css';
import './Option.css';
import { motion } from "framer-motion";

const Option: React.FC = () => {

    return(

        <div>
            {/* bekindly */}
            <motion.div 
            className='title flex justify-center align-middle text-5xl m-2 p-5'
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ type: "spring", delay:2, stiffness: 260, damping: 200 }} 
            >BeKindly
            </motion.div>

            {/* logo */}
            <motion.img 
            src="src/assets/bekindlylogo.svg" 
            alt="BeKindlyLogo"
            className="container p-2 flex justify-center align-middle"
            initial={{ y:600, scale: 0 }}
            animate={{ y:0, rotate: 360, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, velocity:50, damping: 100 }} 
            />
            
            {/* today */}
            <motion.div 
            className='title flex justify-center align-middle text-5xl m-2 p-5'
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ type: "spring", delay:2, stiffness: 260, damping: 200 }} 
            >Today
            </motion.div>

            {/* login button */}
            <motion.button 
            className="login-btn btn btn-block flex justify-center align-middle border-none hover:bg-[#357288] active:bg-[#295a6c] shadow-md rounded-full mt-6 text-xl" 
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ type: "spring", delay:2.8, stiffness: 260, damping: 200 }} >
               Login
            </motion.button>

        </div>

        
    )
}

export default Option