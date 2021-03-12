import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import '../../styles/pages/Forget.css'

function Forget() {
    return (
        <div id="forget">
            <Sidebar />
            <h1>Recuperação de senha</h1>
        </div>
            
    )
}

export default Forget;