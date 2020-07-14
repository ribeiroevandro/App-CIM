import React from 'react';
import { FiEdit, FiTrash2, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Header from '../../Header.js'

import './styles.css'

export default function DashClinic() {
    return (
        <section className="body">
            <Header title="Clinic" />

            <section className="container-dash">
                <section className="tools">
                    <Link to="/dashboard/clinic/new" className="button add">
                    Cadastrar
                    </Link>
                    <input className="input isearch" type="text"  placeholder="Pesquise"/>
                    <button className="button bsearch"><FiSearch size={30} color="#fff" /></button>
                </section>
                
                <table className="tableDoctor">
                    <tr className="tHeader">
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ação</th>
                    </tr>
                    <tr>
                        <td>
                            Miriam Rodrigues
                        </td>
                        <td>
                            miriamhoptmail.com
                        </td>
                        <td>
                            <Link to="/dashboard/clinic/update" className="action">
                                <FiEdit size={24} color="#000"/>
                            </Link>
                            <Link>
                                <FiTrash2 size={24} color="#b60109"/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Miriam Rodrigues
                        </td>
                        <td>
                            miriamhoptmail.com
                        </td>
                        <td>
                            <Link to="/dashboard/clinic/update" className="action">
                                <FiEdit size={24} color="#000"/>
                            </Link>
                            <Link>
                                <FiTrash2 size={24} color="#b60109"/>
                            </Link>
                        </td>
                    </tr>
                </table>
            </section>
        </section>
    )
 }