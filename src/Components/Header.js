import React from 'react'
import HeaderStyles from './HeaderStyles.css'
import{FiShoppingCart, FiLogIn} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
             <div>
      <nav className="navbar navbar-expand-lg navbar-light  bg-light ">
        <div className="container">
          <a className="navbar-brand fw-bold fs-2" href="#">
            Shopzee...
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/profile">
                  Profile
                </Link>
              </li>
            </ul>
            <div className="default">
              <a href="" className="btn-default1">
                <FiShoppingCart /> cart.
              </a>
              <button className="btn-default">
                <a herf="">
                  <FiLogIn /> login
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
        </div>
    )
}

export default Header
