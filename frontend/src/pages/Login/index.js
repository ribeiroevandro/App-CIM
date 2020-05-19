import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'; 

import appImg from '../../assets/splash1.png';

export default function Login(){
  return(
    <div className="login-container">
      <section className="form">
        
        <form>
        <Link className="back-link" to="/admin">
          <img src={appImg} alt="CIM" />
        </Link>
        <Link className="back-link" to="/doctor">
            <button className="button" type="text" href="/doctor">Administrador</button>          
          </Link>
        </form>
      </section>
    </div>
  );
}

