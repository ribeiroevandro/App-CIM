import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

import logo from '../../assets/logo.png'

export default function Login() {
    return (
        <div className="container">
            <section className="login">
                <img className="logo" src={logo} alt="logo" />
                <Link className="button" to="/loginclinic">
                    Login Clinica
                </Link>
                <Link className="button" to="/logindoctor">
                    Login Doutor
                </Link>
            </section>
        </div>
    );
}