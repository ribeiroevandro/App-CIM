import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 

import appImg from '../../../assets/splash1.png';

export default function Admin(){
  return(
    <div className="login-container">
      <section className="form">
        <img src={appImg} alt="CIM" />
        <form>
          <h1>Faça seu Login</h1>
          <input placeholder="Seu Email" />
          <input placeholder="Sua Senha" />
          <button className="button" type="submit">Entrar</button>
        </form>
      </section>
    </div>
  );
}

