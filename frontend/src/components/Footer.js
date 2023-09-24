import React from 'react'

function Footer() {
  return (
    <div className='container-fluid text-bg-dark'>
        <div className='container text-center mt-3 py-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <h5>Mens</h5>
                    <ul className="navbar-nav">
                        <li><a className="nav-link">Pant</a></li>
                        <li><a className="nav-link">shirt</a></li>
                        <li><a className="nav-link">Tshirt</a></li>
                    </ul>
                    
                </div>
                <div className='col-md-3'>
                <h5>Womens</h5>
                <ul className="navbar-nav">
                        <li><a className="nav-link">Pant</a></li>
                        <li><a className="nav-link">skirt</a></li>
                        <li><a className="nav-link">top</a></li>
                    </ul>
                    
                </div>
                <div className='col-md-3'>
                <h5>Kids</h5>
                    
                    
                </div>
                <div className='col-md-3'>
                     <h5>Links</h5>
                    <ul className="navbar-nav">
                        <li><a className="nav-link">Login</a></li>
                        <li><a className="nav-link">Home</a></li>
                        <li><a className="nav-link">Contact</a></li>
                    </ul>
                    
                </div>
            </div>
            <hr/>
            <p>Copyright @Eccommerce 2022-2023 </p>
        </div>

    </div>
  )
}

export default Footer