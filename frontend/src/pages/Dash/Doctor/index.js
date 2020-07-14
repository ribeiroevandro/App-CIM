import React from 'react';
import { FiSearch, FiZoomIn, FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Header from '../../Header.js'

import './styles.css'

export default function DashClinic() {
    return (
        <section className="body">
            <Header title="Dr." />

            <section className="container-dash-doctor">
                <section className="tools">
                    <Link to="/dashboard/doctor/new" className="button add">
                    Cadastrar
                    </Link>
                    <input className="input isearch" type="text"  placeholder="Pesquise"/>
                    <button className="button bsearch"><FiSearch size={30} color="#fff" /></button>
                </section>
                <section className="boards">
                    <div className="patientBoard">
                        <h3>Nome</h3>
                        <p>Miriam C B R</p>
                        <div className="rowBoard">
                            <h3>
                                DUM
                            </h3>
                            <p>
                                25/06/2020
                            </p>
                            <h3>
                                DPP
                            </h3>
                            <p>
                                25/06/2020
                            </p>
                        </div>
                        <h3>
                            Observação
                        </h3>
                        <p>iausdhuaishdui9ahsdiuhausihduiashduihasd</p>
                        <Link to="/dashboard/doctor/detail" className="detailsBoard">
                            <FiZoomIn size={32} />
                        </Link>
                        <Link to="/dashboard/doctor/update" className="detailsBoard">
                            <FiEdit size={32} />
                        </Link>
                    </div><div className="patientBoard">
                        <h3>Nome</h3>
                        <p>Miriam C B R</p>
                        <div className="rowBoard">
                            <h3>
                                DUM
                            </h3>
                            <p>
                                25/06/2020
                            </p>
                            <h3>
                                DPP
                            </h3>
                            <p>
                                25/06/2020
                            </p>
                        </div>
                        <h3>
                            Observação
                        </h3>
                        <p>iausdhuaishdui9ahsdiuhausihduiashduihasd</p>
                        <Link to="/dashboard/doctor/detail" className="detailsBoard">
                            <FiZoomIn size={32} />
                        </Link>
                        <Link to="/dashboard/doctor/update" className="detailsBoard">
                            <FiEdit size={32} />
                        </Link>
                    </div><div className="patientBoard">
                        <h3>Nome</h3>
                        <p>Miriam C B R</p>
                        <div className="rowBoard">
                            <h3>
                                DUM
                            </h3>
                            <p>
                                25/06/2020
                            </p>
                            <h3>
                                DPP
                            </h3>
                            <p>
                                25/06/2020
                            </p>
                        </div>
                        <h3>
                            Observação
                        </h3>
                        <p>iausdhuaishdui9ahsdiuhausihduiashduihasd</p>
                        <Link to="/dashboard/doctor/detail" className="detailsBoard">
                            <FiZoomIn size={32} />
                        </Link>
                        <Link to="/dashboard/doctor/update" className="detailsBoard">
                            <FiEdit size={32} />
                        </Link>
                    </div><div className="patientBoard">
                        <h3>Nome</h3>
                        <p>Miriam C B R</p>
                        <div className="rowBoard">
                            <h3>
                                DUM
                            </h3>
                            <p>
                                25/06/2020
                            </p>
                            <h3>
                                DPP
                            </h3>
                            <p>
                                25/06/2020
                            </p>
                        </div>
                        <h3>
                            Observação
                        </h3>
                        <p>iausdhuaishdui9ahsdiuhausihduiashduihasd</p>
                        <Link to="/dashboard/doctor/detail" className="detailsBoard">
                            <FiZoomIn size={32} />
                        </Link>
                        <Link to="/dashboard/doctor/update" className="detailsBoard">
                            <FiEdit size={32} />
                        </Link>
                    </div><div className="patientBoard">
                        <h3>Nome</h3>
                        <p>Miriam C B R</p>
                        <div className="rowBoard">
                            <h3>
                                DUM
                            </h3>
                            <p>
                                25/06/2020
                            </p>
                            <h3>
                                DPP
                            </h3>
                            <p>
                                25/06/2020
                            </p>
                        </div>
                        <h3>
                            Observação
                        </h3>
                        <p>iausdhuaishdui9ahsdiuhausihduiashduihasd</p>
                        <Link to="/dashboard/doctor/detail" className="detailsBoard">
                            <FiZoomIn size={32} />
                        </Link>
                        <Link to="/dashboard/doctor/update" className="detailsBoard">
                            <FiEdit size={32} />
                        </Link>
                    </div><div className="patientBoard">
                        <h3>Nome</h3>
                        <p>Miriam C B R</p>
                        <div className="rowBoard">
                            <h3>
                                DUM
                            </h3>
                            <p>
                                25/06/2020
                            </p>
                            <h3>
                                DPP
                            </h3>
                            <p>
                                25/06/2020
                            </p>
                        </div>
                        <h3>
                            Observação
                        </h3>
                        <p>iausdhuaishdui9ahsdiuhausihduiashduihasd</p>
                        <Link to="/dashboard/doctor/detail" className="detailsBoard">
                            <FiZoomIn size={32} />
                        </Link>
                        <Link to="/dashboard/doctor/update" className="detailsBoard">
                            <FiEdit size={32} />
                        </Link>
                    </div><div className="patientBoard">
                        <h3>Nome</h3>
                        <p>Miriam C B R</p>
                        <div className="rowBoard">
                            <h3>
                                DUM
                            </h3>
                            <p>
                                25/06/2020
                            </p>
                            <h3>
                                DPP
                            </h3>
                            <p>
                                25/06/2020
                            </p>
                        </div>
                        <h3>
                            Observação
                        </h3>
                        <p>iausdhuaishdui9ahsdiuhausihduiashduihasd</p>
                        <Link to="/dashboard/doctor/detail" className="detailsBoard">
                            <FiZoomIn size={32} />
                        </Link>
                        <Link to="/dashboard/doctor/update" className="detailsBoard">
                            <FiEdit size={32} />
                        </Link>
                    </div>
                    <div className="patientBoard hidden"></div>
                    <div className="patientBoard hidden"></div>
                </section>
            </section>
        </section>
    )
 }