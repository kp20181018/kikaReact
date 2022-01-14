
import React from 'react'
import './Navbar.css'
import NavbarLink from './NavbarLink'


function Navbar() {
    return (
        <div className="container">
            <NavbarLink text="Kviz" to="/Kviz"/>
            <NavbarLink text="Resenja" to="/Resenja" />
        </div>
    )
}

export default Navbar
