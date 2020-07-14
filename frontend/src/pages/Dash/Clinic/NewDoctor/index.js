import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../../Header.js'

import './styles.css'

export default function NewDoctor() {
    return (
        <section className="body">
            <Header title="Clinic" />
            <section className="container-dash">
                <h2>Cadastrar Doutor</h2>
                <form className="formDoctor">
                    <label for="name">Nome</label>
                    <input className="input" type="text" name="name" id="name" />
                    <label for="email">E-mail</label>
                    <input className="input" type="email" name="email" id="email" />
                    <label for="pass">Senha</label>
                    <input className="input" type="text" name="pass" id="pass" />
                    <label for="cPass">Confirmar Senha</label>
                    <input className="input" type="text" name="cPass" id="cPass" />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
                <Link className="button backForm" to="/dashboard/clinic">
                    Voltar
                </Link>
            </section>
        </section>
    )
 }