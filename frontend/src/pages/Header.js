import React from 'react';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './header.css'
import logo from '../assets/logo.png';

function Header({title, children}) {

    return (
        <header className="header">
            <section>
                <img className="logo" src={logo} alt="logo" />
                <h1>Bem Vindo {title}</h1>
            </section>
            <Link to="/">
                <FiPower size={64} color="#000" />
            </Link>
        </header>
    )
}

export default Header;

