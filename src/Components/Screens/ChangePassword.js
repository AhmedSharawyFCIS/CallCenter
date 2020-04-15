import React from 'react';
import {Link} from 'react-router-dom';
import '../../Styles/register.css'
import api from '../../axios'
class ChangePassword extends React.Component
{

    state={currentPassword:'',newPassword:'',confirmPassword:''}
    
   

    handleCurrentPassword = event => {

        this.setState({currentPassword:event.target.value})
    }

    handlenewPassword = event => {

        this.setState({newPassword:event.target.value})
    }
    handleConfirmPassword = event => {

        this.setState({confirmPassword:event.target.value})
    }

  

    handleChangePassword = () =>{

        console.log(this.props.location.state.tokenID)
        const {currentPassword,newPassword,confirmPassword} = this.state
        if(currentPassword !== '' && newPassword !== '' &&confirmPassword!== '')
        {
            api.put('/user/reset',{

                oldpassword:currentPassword,
	            newpassword:newPassword

            },{
                headers:{

                    Authorization: `Bearer ${this.props.location.state.tokenID}`
                }
            }).then(res=>{

                
                console.log(res.data.data)
                console.log(res)
                //this.props.history.replace('/Dashboard',{userInfo:res.data.data})
            }).catch(error=>{

                console.log("error",error)
            })
        }

        else
        {
            console.log("fill required fileds");
        }
    }
    render()
    {
        return(

        <div className='register-container'>
                <h2>Change Password</h2>
                <div className="register-content">
                
                    <div>
                        <label>Current Password</label>
                        <div className='input'>
                            <input type='text' onChange={this.handleCurrentPassword} value={this.state.currentPassword}/>
                        </div>
                    </div>

                    

                    <div>
                        <label >New Password</label>
                        <div className='input'>
                            <input type='password' onChange={this.handlenewPassword} value={this.state.newPassword}/>
                        </div>
                    </div>

                    <div>
                        <label >Confirm Password</label>
                        <div className='input'>
                            <input type='password' onChange={this.handleConfirmPassword} value={this.state.confirmPassword}/>
                        </div>
                    </div>

                    <button onClick={this.handleChangePassword}>Confirm</button>

                    
                </div>
           
        </div>
        )
    }
}

export default ChangePassword