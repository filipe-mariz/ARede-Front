import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import '../../styles/pages/LoginProfessional.css'

function RegisterProfessional() {
    return (
    <div id="loginProfessional">
        
        <Sidebar />
        <h1>Login</h1> 
        <h2>Realize seu cadastro ou login e ajude pessoa proximas a você</h2>
        <div className="wrapper">  
                 
            <div className="login">
                <div className="userName">
                    Digite seu nome de usuário
                    <input type="text" placeholder="Nome de usuário"/>
                </div>
                <div className="password" placeholder="Senha">
                    <br/>                    
                    Senha <input type="password"/> 
                    <br/>
                </div>
                <div className="buttons">
                    <br/>
                    <button className="enter">
                        <Link to="/professional" className="login">Entrar</Link>
                    </button>
                    <button className="register">
                        <Link to="/professionalform" className="form">Não possuo conta</Link>
                    </button>
                </div>
                <div className="forgot">
                    <br/>
                    <Link to="/forget" className="forget">Esqueceu sua senha?</Link>
                </div>

            </div>
        </div>
    </div>
    );

}

export default RegisterProfessional;