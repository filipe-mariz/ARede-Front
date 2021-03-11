import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import PersonHelp from './pages/PersonHelp';
import RegisterProfessional from './pages/LoginProfessional';
import Forget from './pages/Forget';

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>  
            <Route path="/viewprofessional" exact component={PersonHelp} />
            <Route path="/createprofessional" exact component={RegisterProfessional} />    
            <Route path="/forget" exact component={Forget} />      
        </BrowserRouter>

    );
}
export default Routes;