import React from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom';
import '../styles/components/Menu.css';
import Icon from '../images/Icon-menor.png';
import Name from '../images/name-menor.png';

export default function Menu() {
    
    const { goBack } = useHistory();
    
    return (
        <aside className="app-menu">       
         <footer>
          <button type="button" className="goBack" onClick={goBack}>            
            <img src={Icon} alt="icon"/>            
          </button>
          <button className="data">Dados pessois</button>
          <button className="actions">Ações Realizadas</button>
          <button className="funde">Fundadores</button>
          <button className="pequeninos">Pequeninos</button>
          <FiArrowLeft size={24} color="#FFF" />          
        </footer>
        
        <img src={Name} alt="Happy"/>
        
      </aside>
    )
}