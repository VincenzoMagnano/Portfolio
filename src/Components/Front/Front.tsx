import React from 'react'
import './Front.css'
const Front = () => {
    return (
        <>
            <div className=' d-flex justify-content-center img-design position-absolute top-0 '>
                <img className='img-fluid opacity-50 object-fit-cover ' src="Rectangle 2.png" alt="my-cover" />
                <div className='position-absolute text-position text-design2'>
                    <h5 className='text-black text-design text-font fs-4'>Hello, I'm <span className='particular mx-1'>Vincenzo Magnano.</span> I'm a</h5>
                    <h1 className='text-black text-design text-font '>Front End Web Developer </h1>
                </div>
                <div className='position-absolute top-50 my-2 div-design text-design2'>
                    <p className='text-black  text-font-contained fs-6 '>Mainly building with ReactJS,<br /> I focus on turning ideas into functional and visually stunning realities. Lets collaborate and create something remarkable together!</p>
                    <div className="d-flex justify-content-center mt-2 container-fluid">
                        <button className='btn btn-dark mx-5 shadow hover-motion text-font-contained'>My Project</button>
                        <button className='btn btn-outline-secondary mx-5 shadow-sm text-black hover-motion text-font-contained'>Resume</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Front
