import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../../Header.js'

import './styles.css'

export default function NewPreNatal() {
    return (
        <section className="body">
            <Header title="Dr." />
            <section className="container-dash">
                <h2>Editar Pre Natal</h2>
                <form className="formPreNatal">
                    <div className="preNatalResult">
                        <div className="formRowPreNatal">
                            <label for="date">Data</label>
                            <input className="input" type="date" name="date" id="date" />
                        </div>
                        <div className="formRowPreNatal">
                            <label for="ig">IG</label>
                            <input className="input" type="text" name="ig" id="ig" />
                        </div>
                        <div className="formRowPreNatal">
                            <label for="au">AU</label>
                            <input className="input" type="text" name="au" id="au" />
                        </div>
                        <div className="formRowPreNatal">
                            <label for="pa">PA</label>
                            <input className="input" type="text" name="pa" id="pa" />
                        </div>
                        <div className="formRowPreNatal">
                            <label for="peso">PESO</label>
                            <input className="input" type="text" name="peso" id="peso" />
                        </div>
                        <div className="formRowPreNatal">
                            <label for="bcf">BCF</label>
                            <input className="input" type="text" name="bcf" id="bcf" />
                        </div>
                        <div className="formRowPreNatal">
                            <label for="apres">APRES</label>
                            <input className="input" type="text" name="apres" id="apres" />
                        </div>
                        <div className="formRowPreNatal">
                            <label for="edema">EDEMA</label>
                            <input className="input" type="text" name="edema" id="edema" />
                        </div>
                        <div className="formRowPreNatal">
                            <label for="mf">MF</label>
                            <input className="input" type="text" name="mf" id="mf" />
                        </div>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
                <Link className="button backForm" to="/dashboard/doctor/detail">
                    Voltar
                </Link>
            </section>
        </section>
    )
 }