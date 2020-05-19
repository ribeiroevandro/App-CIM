import React from 'react';

import './styles.css'; 

import appImg from '../../../assets/splash1.png';

export default function Visitor(){
  return(
    <div className="login-container">
      <section className="form">
        <img src={appImg} alt="CIM" />
        <form>
          <h1>Faça seu Login</h1>

          <input placeholder="Seu ID" />
          <button className="button" type="submit">Entrar</button>

          <a href="/register">
            Não possui conta?<br/>
            Cadastre-se
          </a>
        </form>
      </section>
    </div>
  );
}

