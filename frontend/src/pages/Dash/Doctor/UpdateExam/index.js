import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../../Header.js'

import './styles.css'

export default function UpdateExam() {
    return (
        <section className="body">
            <Header title="Dr." />
            <section className="container-dash">
                <h2>Editar Exame</h2>
                <form className="formExam">
                    <div className="inputsContainer">
                        <div className="examResult">
                            <div className="formRowExam">
                                <label for="abo">ABO-RH</label>
                                <input className="input" type="text" name="abo" id="abo" />
                            </div>
                            <div className="formRowExam">
                                <label for="glicemia">Glicemia</label>
                                <input className="input" type="text" name="glicemia" id="glicemia" />
                            </div>
                            <div className="formRowExam">
                                <label for="hb">Hb/Ht</label>
                                <input className="input" type="text" name="hb" id="hb" />
                            </div>
                            <div className="formRowExam">
                                <label for="vdrl">VDRL</label>
                                <input className="input" type="text" name="vdrl" id="vdrl" />
                            </div>
                            <div className="formRowExam">
                                <label for="hiv">HIV</label>
                                <input className="input" type="text" name="hiv" id="hiv" />
                            </div>
                            <div className="formRowExam">
                                <label for="hepatiteb">Hepatite B</label>
                                <input className="input" type="text" name="hepatiteb" id="hepatiteb" />
                            </div>
                            <div className="formRowExam">
                                <label for="hepatitec">Hepatite C</label>
                                <input className="input" type="text" name="hepatitec" id="hepatitec" />
                            </div>
                            <div className="formRowExam">
                                <label for="toxoplasmose">Toxoplasmose</label>
                                <input className="input" type="text" name="toxoplasmose" id="toxoplasmose" />
                            </div>
                            <div className="formRowExam">
                                <label for="rubeola">Rubêola</label>
                                <input className="input" type="text" name="rubeola" id="rubeola" />
                            </div>
                            <div className="formRowExam">
                                <label for="outros">Outros</label>
                                <input className="input" type="text" name="outros" id="outros" />
                            </div>
                        </div>
                        <div className="examDate">
                            <div className="formRowExam">
                                <label for="aboDt">Data</label>
                                <input className="input" type="date" name="aboDt" id="aboDt" />
                            </div>
                            <div className="formRowExam">
                                <label for="glicemiaDt">Data</label>
                                <input className="input" type="date" name="glicemiaDt" id="glicemiaDt" />
                            </div>
                            <div className="formRowExam">
                                <label for="hbDt">Data</label>
                                <input className="input" type="date" name="hbDt" id="hbDt" />
                            </div>
                            <div className="formRowExam">
                                <label for="vdrlDt">Data</label>
                                <input className="input" type="date" name="vdrlDt" id="vdrlDt" />
                            </div>
                            <div className="formRowExam">
                                <label for="hivDt">Data</label>
                                <input className="input" type="date" name="hivDt" id="hivDt" />
                            </div>
                            <div className="formRowExam">
                                <label for="hepatitebDt">Data</label>
                                <input className="input" type="date" name="hepatitebDt" id="hepatitebDt" />
                            </div>
                            <div className="formRowExam">
                                <label for="hepatitecDt">Data</label>
                                <input className="input" type="date" name="hepatitecDt" id="hepatitecDt" />
                            </div>
                            <div className="formRowExam">
                                <label for="toxoplasmoseDt">Data</label>
                                <input className="input" type="date" name="toxoplasmoseDt" id="toxoplasmoseDt" />
                            </div>
                            <div className="formRowExam">
                                <label for="rubeolaDt">Data</label>
                                <input className="input" type="date" name="rubeolaDt" id="rubeolaDt" />
                            </div>
                            <div className="formRowExam">
                                <label for="outrosDt">Data</label>
                                <input className="input" type="date" name="outrosDt" id="outrosDt" />
                            </div>
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