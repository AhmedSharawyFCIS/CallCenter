import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Register from './Screens/Register';
import Login from './Screens/Login';
import Dashborard from './Screens/Dashboard';
import ChangePassword from './Screens/ChangePassword';
class App extends React.Component {

    

render(){

    return(

      
        <BrowserRouter >
            <div>
                <Route path='/' exact component={Register}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/Dashboard' exact component={Dashborard}/>
                <Route path='/ChangePassword' exact component={ChangePassword}/>
            </div>
        </BrowserRouter>
     
    )
}
}


export default (App);