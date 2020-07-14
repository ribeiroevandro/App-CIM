import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

import logo from '../../../assets/logo.png'

export default function LoginClinic() {
    return (
        <div className="container">
            <section className="login">
                <img className="logo" src={logo} alt="logo" />
                <h4>
                    Faça login com as suas credenciais de Clinica
                </h4>
                <form>
                    <input className="input" type="email" placeholder="Seu email" />
                    <input className="input" type="password" placeholder="Sua senha" />
                    <button className="button">
                        Login
                    </button>
                </form>

                <Link className="button back" to="/">Voltar</Link>

            </section>
        </div>
    );
}