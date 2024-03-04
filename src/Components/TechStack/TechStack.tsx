import React from 'react'
import './TechStack.css'
import HTML5 from '../../Asset/HTML5.png'
import CSS from '../../Asset/CSS.png'
const TechStack = () => {
  return (
    <>
      <div className='d-flex justify-content-center position'>
        <div className='d-flex justify-content-center'>
            <img className='dimension' src={HTML5} alt="html5" />
            <img className='dimension' src={CSS} alt="css" />
            <img className='dimension' src={CSS} alt="css" />
            <img className='dimension' src={CSS} alt="css" />
            <img className='dimension' src={CSS} alt="css" />
            <img className='dimension' src={CSS} alt="css" />
            <img className='dimension' src={CSS} alt="css" />
        </div>

      </div>
    </>
  )
}

export default TechStack
