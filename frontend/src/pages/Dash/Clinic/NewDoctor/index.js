import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../../Header.js';

import './styles.css'
import api from '../../../../services/api.js';

export default function NewDoctor() {
    const clinicId = localStorage.getItem('clinicId');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPass, setCPass] = useState('');
    
    async function handleRegister(e) {
        e.preventDefault();
        try{
            const data = {
                name,
                email,
                password,
                clinicId
            };
    
            const response = await api.post('/doctor', data, {headers: {'Authorization': clinicId}})
            alert("Doutor Cadastrado com sucesso");
        }catch{
            alert("Erro no cadastro tente novamente");
        }
        
    }
    return (
        <section className="body">
            <Header title="Clinic" />
            <section className="container-dash">
                <h2>Cadastrar Doutor</h2>
                <form className="formDoctor" onSubmit={handleRegister}>
                    <label for="name">Nome</label>
                    <input 
                        className="input" 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                    />
                    <label for="email">E-mail</label>
                    <input 
                        className="input" 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label for="pass">Senha</label>
                    <input 
                        className="input" 
                        type="text" 
                        name="pass" 
                        id="pass"
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                    />
                    <label for="cPass">Confirmar Senha</label>
                    <input 
                        className="input" 
                        type="text" 
                        name="cPass" 
                        id="cPass" 
                        value={cPass}
                        onChange={e => setCPass(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
                <Link className="button backForm" to="/dashboard/clinic">
                    Voltar
                </Link>
            </section>
        </section>
    )
 }