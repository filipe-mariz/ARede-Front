import React from 'react'
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png'
import icon from '../images/icon.png';
import name from '../images/name.png';
import '../styles/pages/Landing.css'

function Landing() {
    return (
        <div id="page-landing">
            <div className="wrapper">
                <span>Recife, Pernambuco</span>
                <div className="image">                    
                    <img src={name} alt="Happy"/>   
                    <h3>Total de 1000 conexões realizadas</h3>                 
                </div>                
                <div className="button">
                    <button className="create">
                        <Link to="createprofessional" className="link"> Quero ajudar </Link>
                    </button>
                    <button className="help">
                        <Link to="viewprofessional" className="link"> Preciso de ajuda </Link>
                    </button>
                </div>
                
            </div>
        </div>
    );
}

export default Landing;