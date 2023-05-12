import "./Navbar.scss";
import logo from "../../Helper/logo(1).png"

import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" width="100px" />
            </div>
            <div className="links">
                <a href="#horoscope">Horoscope</a>
                <a href="#Daily">Daily</a>
                <a href="#Tarot">Tarot</a>
                <a href="#Article">Article</a>
                <a href="#Content">Content</a>
            </div>

        </div>
    )
}

export default Navbar