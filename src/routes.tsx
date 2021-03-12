import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/01_Landing';
import PersonHelp from './pages/PersonHelp';
import RegisterProfessional from './pages/Professional/2_LoginProfessional';
import Forget from './pages/Professional/2.2_Forget';
import ProfessionalPrincipal from './pages/Professional/2.1_ProfessionalPrincipal';
import Form from './pages/Professional/2.3_Form';

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>  
            <Route path="/viewprofessional" exact component={PersonHelp} />
            <Route path="/createprofessional" exact component={RegisterProfessional} />    
            <Route path="/forget" exact component={Forget} />    
            <Route path="/professional" exact component={ProfessionalPrincipal} /> 
            <Route path="/professionalform" exact component={Form} /> 
        </BrowserRouter>

    );
}
export default Routes;