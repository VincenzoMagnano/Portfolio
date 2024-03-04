import React, { FC } from 'react'
import './Navbar.css'
import VMLogo from '../../Asset/VMLogo.png'
import { motion } from 'framer-motion'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img className="logo-dim" src={VMLogo} alt="logo" />
                    <button 
                    className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active mx-2" aria-current="page" href="#">Home</a>
                            <a className="nav-link mx-2" href="#">Features</a>
                            <a className="nav-link mx-2" href="#">Pricing</a>
                            <a className="nav-link mx-2" href="#">Disabled</a>
                            <motion.button 
                            whileHover={{

                                 boxShadow: "4px 4px 0px rgb(000,000,000)",
                                 
                                }}
                            className='btn btn-dark btn-sm mx-5'>My Github</motion.button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
