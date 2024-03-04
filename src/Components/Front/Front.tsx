import React from 'react'
import './Front.css'

const Front = () => {
    return (
        <>
           <div>
           <img src="01-01.jpg" className="img-fluid w-100" alt="..."/>
              <div className="overlay position-absolute top-0 left-0 w-100 h-100 d-flex justify-content-center align-items-center  bg-opacity-50">
                    <h3>Hello, I'm Vincenzo Magnano</h3>
              </div>
           </div>
        </>
    )
}

export default Front
