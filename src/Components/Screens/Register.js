import React from 'react';
import {Link} from 'react-router-dom';
import '../../Styles/register.css'
import api from '../../axios'
class Register extends React.Component
{

    state={firstName:'',lastName:'',userName:'',password:'',email:'',phone:'',role:'',error:false}
    
    
    handleFirstName = event => {

        this.setState({firstName:event.target.value})
    }
    handleLastName = event => {

        this.setState({lastName:event.target.value})
    }

    handleUserName = event => {

        this.setState({userName:event.target.value})
    }

    handlePassword = event => {

        this.setState({password:event.target.value})
    }

    handleEmail = event => {

        this.setState({email:event.target.value})
    }

    handlePhone = event => {

        this.setState({phone:event.target.value})
    }
    handleRole = event => {

        console.log(event.target.value)
        this.setState({role:event.target.value})
    }

    handleRegister = () =>{

        const {firstName,lastName,userName,password,email,phone,role} = this.state
        console.log(firstName)
        if(firstName !== ''&& lastName !== '' &&userName !== '' && password !== '' && email !== '' && phone !== '' && role !== '')
        {
            api.post('/user/register',{

                username:userName,
                firstname:firstName,
                lastname:lastName,
                password:password,
                phone:phone,
                email:email,
                user_category_id:role

            }).then(res=>{

                console.log(res.data)
                this.props.history.push('/login')
            }).catch(error=>{

                console.log("error",error)
            })
        }

        else
        {
            console.log("fill required fileds");
            this.setState({error:true})
            //this.props.history.replace(`/Dashboard/${this.state.firstName}`,{name:'sharawy'})
        }
    }
    render()
    {
        const {firstName,lastName,userName,password,email,phone,role,error} = this.state
        return(
        <div className='register-div'>
            <div className='register-container'>
                
            <div>
                <h2>Register</h2>
                <div className="register-content">
                    
                    <div>
                        <label style={error&&!firstName?{marginBottom:'15px'}:{}}>First Name :</label>
                        <div className='input' >
                            <input type='text' onChange={this.handleFirstName} value={this.state.firstName}/>
                            {error&&!firstName&&<div style={{padding:'0',color:'red',fontSize:'13px',width:'100%'}}>First Name is Required</div>}
                        </div>
                    </div>

                    <div>
                        <label style={error&&!lastName?{marginBottom:'15px'}:{}}>Last Name :</label>
                        <div className='input'>
                            <input type='text' onChange={this.handleLastName} value={this.state.lastName}/>
                            {error&&!lastName&&<div style={{padding:'0',color:'red',fontSize:'13px',width:'100%'}}>Last Name is Required</div>}
                        </div>
                    </div>

                    <div>
                        <label style={error&&!userName?{marginBottom:'15px'}:{}}>User Name :</label>
                        <div className='input'>
                            <input type='text' onChange={this.handleUserName} value={this.state.userName}/>
                            {error&&!userName&&<div style={{padding:'0',color:'red',fontSize:'13px',width:'100%'}}>User Name is Required</div>}
                        </div>
                    </div>

                    <div>
                        <label style={error&&!email?{marginBottom:'15px'}:{}}>Email :</label>
                        <div className='input'>
                            <input type='text' onChange={this.handleEmail} value={this.state.email}/>
                            {error&&!email&&<div style={{padding:'0',color:'red',fontSize:'13px',width:'100%'}}>Email is Required</div>}
                        </div>
                    </div>

                    <div>
                        <label style={error&&!password?{marginBottom:'15px'}:{}} >Password :</label>
                        <div className='input'>
                            <input type='password' onChange={this.handlePassword} value={this.state.password}/>
                            {error&&!password&&<div style={{padding:'0',color:'red',fontSize:'13px',width:'100%'}}>Password is Required</div>}
                        </div>
                    </div>

                    <div>
                        <label style={error&&!phone?{marginBottom:'15px'}:{}}>Phone Number :</label>
                        <div className='input'>
                            <input type='text' onChange={this.handlePhone} value={this.state.phone}/>
                            {error&&!phone&&<div style={{padding:'0',color:'red',fontSize:'13px',width:'100%'}}>Phone is Required</div>}
                        </div>
                    </div>

                    <div>
                        <label style={error&&!role?{marginBottom:'15px'}:{}}>Role :</label>
                        <div className='input'>
                            <select onChange={this.handleRole} value={this.state.role}>

                                <option hidden>Choose Role</option>
                                
                                <option value='8704fd70-22fd-41da-8d54-9b9428d4906f'>Admin</option>

                                <option value='0dc9d70e-3e37-4ddf-a7c1-1806e721ee89'>Regular</option>
                            </select>

                            {error&&!role&&<div style={{padding:'0',color:'red',fontSize:'13px',width:'100%'}}>Role is Required</div>}
                        </div>
                    </div>

                    <button onClick={this.handleRegister}>Register</button>

                    <Link to='/login'>Already have an Account...</Link>
                </div>
            </div>
            </div>
            {/* <div style={{display:'flex'}}>
                wdlpwdlp
            </div> */}
        </div>
        )
    }
}

export default Register