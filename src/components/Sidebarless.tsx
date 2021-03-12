import React from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom';
import '../styles/components/Sidebarless.css';
import Icon from '../images/Icon-menor.png';
import Name from '../images/name-menor.png';

export default function Sidebarless() {
    
    const { goBack } = useHistory();
    
    return (
        <aside className="app-sidebarless">       
         <footer>
          <button type="button" onClick={goBack}>            
            <img src={Icon} alt="icon"/>            
          </button>
          <FiArrowLeft size={24} color="#FFF" />          
        </footer>
        
        <img src={Name} alt="Happy"/>
        
      </aside>
    )
}