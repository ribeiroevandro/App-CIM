import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../../services/api';
import Header from '../../../Header.js';

import './styles.css'

export default function UpdateDoctor(props) {
    const clinicId = localStorage.getItem('clinicId');
    const idDoctor = props.match.params.id;
    const [doctor, setDoctor] = useState([]);
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [cPass, setCPass] = useState('');

    useEffect(() => {
        api.get(`/listDoctor/${idDoctor}`).then(response => {
            setDoctor(response.data);
        })
    },[idDoctor])
    
    async function update(){
        const reponse = await api.put(`/doctor/${idDoctor}`, {body: {name:newName, email:newEmail, password:newPassword}}, {headers: {'Authorization' : clinicId}})
    }

    return (
        <section className="body">
            <Header title="Clinic" />
            <section className="container-dash">
                <h2>Editar Doutor</h2>
                <form className="formDoctor" onSubimit={update}>
                    <label >Nome</label>
                    <input className="input" type="text" name="fName" id="fName" value={doctor.name} onChange={e => setNewName(e.target.value)} />
                    <label >E-mail</label>
                    <input className="input" type="email" name="fEmail" id="fEmail" value={doctor.email} onChange={e => setNewEmail(e.target.value)} />
                    <label >Senha</label>
                    <input className="input" type="text" name="fPass" id="fPass" onChange={e => setNewPassword(e.target.value)} />
                    <label >Confirmar Senha</label>
                    <input className="input" type="text" name="fCPass" id="fCPass" onChange={e => setCPass(e.target.value)}/>
                    <button className="button" type="submit">Editar</button>
                </form>
                <Link className="button backForm" to="/dashboard/clinic">
                    Voltar
                </Link>
            </section>
        </section>
    )
 }