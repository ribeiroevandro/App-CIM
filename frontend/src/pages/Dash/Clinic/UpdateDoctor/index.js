import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../../services/api';
import Header from '../../../Header.js';

import './styles.css'

export default function UpdateDoctor(props) {
    const clinicId = localStorage.getItem('clinicId');
    const idDoctor = props.match.params.id;
    const [doctor, setDoctor] = useState({});
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        api.get(`/listDoctor/${idDoctor}`).then(response => {
            setDoctor(response.data);
        })
    },[idDoctor])

    function getNameInput(event) {
        setNewName(event.target.value)
    }
    
    function getEmailInput(event) {
        setNewEmail(event.target.value)
    }
    
    function getPasswordInput(event) {
        setNewPassword(event.target.value);
    }
    
    function getConfirmPasswordInput(event) {
        setConfirmPassword(event.target.value);
    }

    
    async function update(e) {
        e.preventDefault();
        if(newPassword !== doctor.password || newPassword !== confirmPassword) {
            alert('Deu ruim')
        }
        
        const reponse = await api.put(`/doctor/${idDoctor}`, {body: {name:newName, email:newEmail, password:newPassword}}, {headers: {'Authorization' : clinicId}})
        
        console.log(reponse.data)
    }


    return (
        <section className="body">
            {console.log(doctor, newPassword)}
            <Header title="Clinic" />
            <section className="container-dash">
                <h2>Editar Doutor</h2>
                <form className="formDoctor" onSubmit={update}>
                    <label >Nome</label>
                    <input className="input" type="text" name="fName" id="fName" value={doctor.name} onChange={getNameInput} />
                    <label >E-mail</label>
                    <input className="input" type="email" name="fEmail" id="fEmail" value={doctor.email} onChange={getEmailInput} />
                    <label >Senha</label>
                    <input className="input" type="text" name="fPass" id="fPass" value={doctor.password} onChange={getPasswordInput} />
                    <label >Confirmar Senha</label>
                    <input className="input" type="text" name="fCPass" id="fCPass" value={confirmPassword} onChange={getConfirmPasswordInput} />
                    <button className="button" type="submit">Editar</button>
                </form>
                <Link to="/dashboard/clinic" className="button backForm">
                    Voltar
                </Link>
            </section>
        </section>
    )
 }