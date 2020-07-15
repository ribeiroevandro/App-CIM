import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../../services/api';

import './styles.css'

import logo from '../../../assets/logo.png'

export default function LoginClinic() {
    const [User, setUser] = useState('');
    const [Password, setPassword] = useState('');
    const history = useHistory(); 

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('/sessionsClinic', {User, Password});
            localStorage.setItem('clinicId', response.data.id);
            history.push('/dashboard/clinic');
        }

        catch (err) {
            alert('Falha no login, tente novamente.')
        }
    }

    return (
        <div className="container">
            <section className="login">
                <img className="logo" src={logo} alt="logo" />
                <h4>
                    Faça login com as suas credenciais de Clinica
                </h4>
                <form onSubmit={handleLogin}>
                    <input 
                        className="input" 
                        type="text" 
                        placeholder="Seu usário"
                        value={User}
                        onChange={e => setUser(e.target.value)}
                        />
                    <input 
                        className="input" 
                        type="password" 
                        placeholder="Sua senha" 
                        value={Password}
                        onChange={e => setPassword(e.target.value)}
                        />
                    <button className="button">
                        Login
                    </button>
                </form>

                <Link className="button back" to="/">Voltar</Link>

            </section>
        </div>
    );
}