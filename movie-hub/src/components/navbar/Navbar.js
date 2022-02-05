import React from 'react';
import "./navbar.css"

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='logo'>LOGO</div>
            <ul className='menu'>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Movies</a></li>
                <li><a href='/'>Series</a></li>
            </ul>
        </nav>
    )
}
