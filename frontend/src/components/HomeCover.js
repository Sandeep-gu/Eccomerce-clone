import React from 'react'
import './HomeCover.css'
import Slider from './Slider'
function HomeCover() {
  return (
   
    <div>
    {/*add shopping image and define the header of shopping platform name*/}
        
    <div className="container-fluid maintxt d-flex flex-column justify-content-center text-center ">
        <h1 className='custom-heading'>Ecommerce Shop</h1>
        <p className='fs-4'>Clothes that Talks on behalf of you.Something for every occasion</p>
    </div>
        {/*here call the Slider component*/}
        <Slider/>
    </div>
  )
}

export default HomeCover