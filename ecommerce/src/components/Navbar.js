import React from 'react';
import { Link} from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const items=useSelector((state)=>state.cart);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="logo navbar-brand" href="/">REDUX STORE</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="navLink nav-link active" aria-current="page"  to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="navLink nav-link"  to='/cart'>Cart</Link>
          </li>
          <li className="nav-item">
            <Link className="navLink nav-link"  to='/signup'> Sign up</Link>
          </li>
          <li className="nav-item">
            <Link className="cartCount nav-link" tabindex="-1" aria-disabled="true">Cart item:{items.length}</Link>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  ) 
}

export default Navbar;
