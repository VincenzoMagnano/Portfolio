import React from 'react'
import './Front.css'
import Navbar from '../Navbar/Navbar'
import { motion } from 'framer-motion'

const Front = () => {
    return (
        <>
            <div className="background-color">
                <Navbar />
                <div className=" hero-inner text-center d-flex flex-column justify-content-center">
                    <p>Hello, I'm Vincenzo Magnano. I am a</p>
                    <div>
                        <h1>FRONTEND WEB DEVELOPER</h1>
                    </div>
                    <motion.p
                        whileHover={{
                            
                            backgroundColor: "rgb(255, 255, 255)",
                            transition: { duration: 1, ease: "easeInOut" },
                            
                        }}
                        className="hero-intro">
                        Mainly building with ReactJS, I focus on turning ideas into functional and visually stunning realities. Lets collaborate and create something remarkable together!
                    </motion.p>
                    <div className="heroButton m-3">
                        <a href="#projects">
                            <motion.button
                                whileHover={{ boxShadow: "4px 4px 0px rgb(000,000,000)" }}
                                className='btn btn-dark btn-sm mx-2'>My Projects</motion.button>
                            <motion.button
                                whileHover={{ boxShadow: "4px 4px 0px rgb(000,000,000)" }}
                                className='btn btn-outline-tertiary btn-sm mx-2'>My Projects</motion.button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Front
