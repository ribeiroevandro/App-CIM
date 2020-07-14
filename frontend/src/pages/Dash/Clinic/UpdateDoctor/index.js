import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../../Header.js'

import './styles.css'

export default function UpdateDoctor(id) {
    return (
        <section className="body">
            <Header title="Clinic" />
            <section className="container-dash">
                <h2>Editar Doutor</h2>
                <form className="formDoctor">
                    <label for="fName">Nome</label>
                    <input className="input" type="text" name="fName" id="fName" />
                    <label for="fEmail">E-mail</label>
                    <input className="input" type="email" name="fEmail" id="fEmail" />
                    <label for="fPass">Senha</label>
                    <input className="input" type="text" name="fPass" id="fPass" />
                    <label for="fCPass">Confirmar Senha</label>
                    <input className="input" type="text" name="fCPass" id="fCPass" />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
                <Link className="button backForm" to="/dashboard/clinic">
                    Voltar
                </Link>
            </section>
        </section>
    )
 }