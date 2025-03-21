import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu, setMenu] = useState("Shop");

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>Shopper</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => setMenu("Shop")}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link> {menu === "Shop" && <hr />}</li>
                <li onClick={() => setMenu("Men")}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link> {menu === "Men" ? <hr /> : null}</li>
                <li onClick={() => setMenu("Women")}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link> {menu === "Women" ? <hr /> : null}</li>
                <li onClick={() => setMenu("Kids")}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link> {menu === "Kids" ? <hr /> : null}</li>
            </ul>
            <div className='nav-login-cart'>
                {/* link button should be outside of button */}
                <Link to='/login'>
                <button>
                    Login
                </button>
                </Link>

                <Link to='/cart'> <img src={cart_icon} alt="" /></Link>
                <div className='nav-cart-count'>
                    0
                </div>

            </div>
        </div>
    )
}

export default Navbar