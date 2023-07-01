import React from "react";
import './Menu.css'
import { Link } from 'react-router-dom'
import Logo from '../../static/images/logoMenu.png'

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu-content">
                <nav className="nav-menu">
                    <ul className="menu-ul">
                        <li><Link to="/fotografia" className="menu-li">Fotografia</Link></li>
                        <li><Link to="/" className="link-img"><img src={Logo} alt="Logomarca Leandro Machado" className="logo" /></Link></li>
                        <li><Link to="/contato" className="menu-li">Contato</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Menu