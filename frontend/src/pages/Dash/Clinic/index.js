import React, { useEffect, useState } from 'react';
import { FiEdit, FiTrash2, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../../services/api';


import Header from '../../Header.js'

import './styles.css'

export default function DashClinic() {
    const clinicId = localStorage.getItem('clinicId');
    
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        api.get('/doctor').then(response => {
            setDoctors(response.data);
        })
    }, [clinicId]);

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
                    <thead>
                        <tr className="tHeader">
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map(doctor => (
                            <tr key={doctor.id}>
                                <td>
                                    {doctor.name}
                                </td>
                                <td>
                                    {doctor.email}
                                </td>
                                <td>
                                    <Link to={`/dashboard/clinic/update/${doctor.id}`}  className="action">
                                        <FiEdit size={24} color="#000"/>
                                    </Link>
                                    <Link to="/">
                                        <FiTrash2 size={24} color="#b60109"/>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </section>
    )
 }