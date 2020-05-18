import React from 'react';

import './styles.css'; 

import appImg from '../../assets/logo.png';

export default function Login(){
  return(
    <div className="login-container">
      <section className="from">
        <img src={appImg} alt="CIM" />
        <form>
          <h1>Faça seu Login</h1>

          <input placeholder="Seu ID" />
          <button type="submit">Entrar</button>

          <a href="/register">
            Não possui conta?<br/>
            Cadastre-se
          </a>
        </form>
      </section>
    </div>
  );
}

