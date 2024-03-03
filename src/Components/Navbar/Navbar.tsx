import React, { FC } from 'react'
import './Navbar.css'

interface NavbarProps {
    onChange: () => void
}
const Navbar: FC<NavbarProps> = () => {
    return (
        <>
        <div>
            <nav className="navbar navbar-expand-lg bg-body-trasparent z-3 position-relative md-5">
                <div className="container-fluid">
                    <a className="navbar-brand mx-3 text-design hover-motion" href="#">VM</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-5">
                                <a className="nav-link active hover-motion text-font-contained" aria-current="page" href="#">Tech Stack</a>
                            </li>
                            <li className="nav-item mx-5 hover-motion">
                                <a className="nav-link text-font-contained" href="#">Projects</a>
                            </li>
                            <li className="nav-item mx-5 hover-motion">
                                <a className="nav-link text-font-contained" href="#">About Me</a>
                            </li>
                            <li className="nav-item mx-5 hover-motion">
                                <a className="nav-link text-font-contained" href="#">Contact Me</a>
                            </li>
                            
                            <button className='btn btn-dark mx-5 shadow-sm hover-motion text-font-contained'>My Github</button>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        </>
    )
}

export default Navbar
