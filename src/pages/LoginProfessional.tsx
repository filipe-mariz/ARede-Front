import { deflate } from 'node:zlib';
import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/pages/LoginProfessional.css'

function RegisterProfessional() {
    return (
    <div id="loginProfessional">
        <Sidebar />
        <div className="wrapper">            
            <div className="login">
                <div className="userName">
                    <h2>Digite seu nome de usuário</h2>
                    <input type="text" placeholder="Entre "/>
                </div>
                <div className="password">
                    <h2>Digite sua senha</h2>
                    <input type="password"/>
                </div>
                <div className="buttons">
                    <button className="enter">Entrar</button>
                    <button className="registe">Não possuo conta</button>
                </div>

            </div>
        </div>
    </div>
    );

}

export default RegisterProfessional;