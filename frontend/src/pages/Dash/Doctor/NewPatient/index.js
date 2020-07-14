import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../../Header.js'

import './styles.css'

export default function NewPatient() {
    return (
        <section className="body">
            <Header title="Dr." />
            <section className="container-dash">
                <h2>Cadastrar Paciente</h2>
                <form className="formPatient">
                    <div className="main">
                        <label for="name">Nome</label>
                        <input className="input" type="text" name="name" id="name" />
                        <div className="formRow">
                            <div className="formRowFirst" style={{marginRight: '25px'}}>
                                <label for="dum">DUM</label>
                                <input className="input" type="date" name="dum" id="dum" />
                            </div>
                            <div className="formRowFirst">
                                <label for="dpp">DPP</label>
                                <input className="input" type="date" name="dpp" id="dpp" />
                            </div>
                        </div>
                        <div className="formRow">
                            <div className="formRowFirst" style={{display: 'flex', flexDirection: 'row', marginRight: '25px'}}> 
                                <div className="formRowSecond">
                                    <label for="g">G</label>
                                    <input className="input" type="number" name="g" id="g" min="0"/>
                                </div>
                                <div className="formRowSecond">
                                    <label for="p">P</label>
                                    <input className="input" type="number" name="p" id="p" min="0" />
                                </div>
                                <div className="formRowSecond">
                                    <label for="a">A</label>
                                    <input className="input" type="number" name="a" id="a" min="0" />
                                </div>
                            </div>
                            <div className="formRowFirst">
                                <label for="">Normal/Cesária</label>
                                <select className="input" name="child-birth">
                                    <option value="Normal">Normal</option>
                                    <option value="Cesária">Cesária</option>
                                </select>
                            </div>
                        </div>
                        <label for="obs">Observações</label>
                        <textarea className="input textarea" name="obs" id="obs" />
                    </div>
                    <div className="second">
                        <div>
                            <label for="email">Email</label>
                            <input className="input" type="email" name="email" id="email" />
                            <label for="pass">Senha</label>
                            <input className="input" type="text" name="pass" id="pass" />
                            <label for="cPass">Confirmar Senha</label>
                            <input className="input" type="text" name="cPass" id="cPass" />
                        </div>
                        <button className="button" type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
                <Link className="button backForm" to="/dashboard/doctor">
                    Voltar
                </Link>
            </section>
        </section>
    )
 }