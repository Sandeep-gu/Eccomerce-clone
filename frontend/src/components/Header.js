import React from "react";

import "./Header.css";
{/*add css file for styling name is Header.css*/}
function Header() {
  return (
    <div>
    {/*create navbar*/}
     <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{color:"rgb(255, 153, 0)"}}>Ecommerce</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="d-flex justify-content-md-around flex-wrap  w-100 mx-md-5">
            {/*create Searchbox*/}
            <div class="d-flex flex-wrap">
                <input class="form-control input-box rounded-0 custom-border" type="search" placeholder="Search" aria-label="Search"/>
                <button class="custom-border-button btn btn-outline-success custom-backgroundColor rounded-0" type="submit">Search</button>
            </div>
            {/*create login and shopping button*/}
            <div class="d-flex">

                <button class="btn btn-outline-success custom-backgroundColor me-4" type="submit">Search</button>
                <a className='nav-link mx-3 my-1' href='/'><i class="fa-solid fa-cart-shopping fs-3" style={{color:"rgb(255, 153, 0)"}}></i></a>
            </div>
      </div>
    </div>
  </div>
</nav>
{/*here I created all button those product are available in the ecommerce shop*/}
<div className="d-flex flex-wrap w-100 justify-content-center p-2 bg-secondary">
    <div><a className='nav-link p-2 rounded' href='/'>Home</a></div>
    <div><a className='nav-link p-2 rounded' href='/'>All Product</a></div>
    <div className="dropdown">
    <a class="nav-link p-2 dropdown-toggle rounded" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mens
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Pant</a></li>
            <li><a class="dropdown-item" href="#">Shirt</a></li>

            <li><a class="dropdown-item" href="#">Tshirt</a></li>
          </ul>
    </div>
    <div >
    <a class="nav-link dropdown-toggle p-2 rounded" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Pant</a></li>
            <li><a class="dropdown-item" href="#">Skirt</a></li>
            
            <li><a class="dropdown-item" href="#">Hoodies</a></li>
          </ul>

    </div>
    <div><a className='nav-link p-2 rounded' href='/'>Kids</a></div>
    <div ><a className='nav-link p-2 rounded' href='/'>Contact</a></div>
</div>
    </div>
  );
}

export default Header;
