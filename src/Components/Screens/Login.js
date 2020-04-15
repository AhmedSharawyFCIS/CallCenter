import React from 'react';
import {Link} from 'react-router-dom';
import '../../Styles/register.css'
import api from '../../axios'
import axios from 'axios'
class Login extends React.Component
{

    state={userName:'',password:''}
    
   

    handleUserName = event => {

        this.setState({userName:event.target.value})
    }

    handlePassword = event => {

        this.setState({password:event.target.value})
    }

  

    handleLogin = () =>{

        const {userName,password} = this.state
        if(userName !== '' && password !== '' )
        {
            // api.post('/user/login',{

            //     username:userName,
            //     password:password,

            // }).then(res=>{

            //     console.log(res.data.data)
            //     console.log(res.data)
            //     this.props.history.replace('/Dashboard',{userInfo:res.data.data})
            // }).catch(error=>{

            //     console.log("error",error)
            // })

            
              
                axios
                  .post("http://10.22.1.33:3000/user/login", {
                    username: "Ahmed.Sharawy",
                    password: "123456"
                  })
                  .then(response => {
                    console.log(response.data);
                  })
                  .catch(function(error) {
                    console.log(error);
                  });
        }

        else
        {
            console.log("fill required fileds");
        }
    }
    render()
    {
        return(

        <div className='register-div'>
            <div className='register-container'>

                <div>
                    <h2>Login</h2>
                    <div className="register-content">
                    
                        <div>
                            <label>User Name :</label>
                            <div className='input'>
                                <input type='text' onChange={this.handleUserName} value={this.state.userName}/>
                            </div>
                        </div>

                        

                        <div>
                            <label >Password :</label>
                            <div className='input'>
                                <input type='password' onChange={this.handlePassword} value={this.state.password}/>
                            </div>
                        </div>

                        

                        <button onClick={this.handleLogin}>Login</button>

                        
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Login