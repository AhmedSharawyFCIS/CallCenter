import React from 'react';
import {useHistory} from 'react-router-dom'
import '../../Styles/Dashboard.css'


class Dashboard extends React.Component
{

   
    componentDidMount() {
       

           this.props.history.listen(location=>{

            if(location.pathname === '/')
            {
                this.props.history.goForward()
            }
           })
    }
    
    
    render()
    {
        return(
            <div className='dashboard-container'>
                <div className='header'>
                    <h3>{'Hello ' + this.props.location.state.userInfo.firstname +' ' +   this.props.location.state.userInfo.lastname}</h3>
                    <button className='button' onClick={()=>{this.props.history.replace('/login')}}>Logout</button>
                </div>
                <div className='dashboard-content'>
                   

                    <div>
                        {this.props.match.params.data}
                    </div>
                    <button className='button' onClick={()=>{this.props.history.replace('/ChangePassword',{tokenID:this.props.location.state.userInfo.token_id})}}>Change Password</button>
                </div>
            </div>
        )
    }
}

export default Dashboard