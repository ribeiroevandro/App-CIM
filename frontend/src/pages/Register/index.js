import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 

import appImg from '../../assets/splash1.png';

export default function Register(){
  return(
    <div className="register-container">
      <section>
        <img src={appImg} alt="CIM" />
      </section>
      <section className="form">
        <form>
          <h1>Faça seu Login</h1>
          <input placeholder="Seu Email" />
          <input placeholder="Sua Senha" />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/admin">
            Voltar
          </Link>
        </form>
      </section>
    </div>
  );
}

