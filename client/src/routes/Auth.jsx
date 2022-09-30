import React, { Fragment, useState } from 'react'
import '../styles/css/auth.css'
import { useNavigate } from "react-router-dom"
import useLocalStorage from 'use-local-storage'
import {ReactComponent as Home} from '../assets/svg/home.svg'
import { api } from '../api/axios'
import { Link } from "react-router-dom"
import { setJwtToken, setRefreshToken } from '../includes/session'


const Auth = () => {
    const [active, setActive] = useLocalStorage('activity', 'login')
    const [register, setRegister] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        cpassword: ''
    })
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const [response, setResponse] = useState({message: '', type: ''})
    const registerSubmit = async (e) => {
        e.preventDefault()
        let res = await api('POST', 'auth/register', register)
        setResponse(res)
        setRegister({
            fname: '',
            lname: '',
            email: '',
            phone: '',
            school: '',
            department: '',
            semester: '',
            year: '',
            password: '',
            cpassword: ''
        })
    }

    let navigate = useNavigate()
    const loginSubmit = async (e) => {
        e.preventDefault()
        let res = await api('POST', 'auth/login', login)
        setResponse(res)
        setLogin({
            email: '',
            password: ''
        })

        // Handle user session & JWT & Redirection
        if(res.type === 'success'){
            setJwtToken(res.authToken)
            setRefreshToken(res.refreshToken)
            setTimeout(() => {
                return navigate("/")
            }, 3000)
        }
    }
  return (
    <Fragment>
        <div className="authentification">
            <Link to="/">
                <Home className="getbackHome"/>            
            </Link>
          <section className="contact">
            <div className="contact-wrapper">
                <div className="contFormSec">
                    <h2 className="contact-header">Hate Speech Detection</h2>
                    {(response.message!=='')?<p className={(response.type==='success')?"formNotifySucc":"formNotify"}>{response.message}</p>:null}
                    <form action="contact.php" method="POST" className={(active==='register')?"registration-form":"hide-activity"} onSubmit={(e)=>registerSubmit(e)}>
                        <h3>Register</h3>
                        <div className="cont-group">
                            <div className="cont-gr-flex">
                                <div className="contPut">
                                    <div className="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" className="inputText" name="fname" value={register.fname} onChange={(e)=>{setRegister({ ...register, [e.target.name]: e.target.value })}}/>
                                        <span className="floating-label">First Name <span style={{color: "red"}}>*</span></span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                                <div className="contPut">
                                    <div className="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" className="inputText" name="lname" value={register.lname} onChange={(e)=>{setRegister({ ...register, [e.target.name]: e.target.value })}}/>
                                        <span className="floating-label">Last Name <span style={{color: "red"}}>*</span></span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                            </div>
                            <div className="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" className="inputText" name="email" value={register.email} onChange={(e)=>{setRegister({ ...register, [e.target.name]: e.target.value })}}/>
                                <span className="floating-label">Email address <span style={{color: "red"}}>*</span></span>
                            </div>
                            <span id="id-err"></span>
                            <div className="user-input-wrp">
                                <br/>
                                <input id="id-input" type="password" className="inputText" name="password" value={register.password} onChange={(e)=>{setRegister({ ...register, [e.target.name]: e.target.value })}}/>
                                <span className="floating-label">Password <span style={{color: "red"}}>*</span></span>
                            </div>
                            <div className="user-input-wrp">
                                <br/>
                                <input id="id-input" type="password" className="inputText" name="cpassword" value={register.cpassword} onChange={(e)=>{setRegister({ ...register, [e.target.name]: e.target.value })}}/>
                                <span className="floating-label">Confirm Password <span style={{color: "red"}}>*</span></span>
                            </div>
                            <span id="id-err"></span>
                        </div>
                        <p>have an account? <span onClick={()=>{
                            setActive('login')
                            setResponse({message: '', type: ''})
                        }}>Login here</span></p>
                        <div className="resetting-pass">
                            <input type="submit" value="register" name="contact" className="contact-btn"/>
                        </div>
                    </form>
                    <form action="contact.php" method="POST" className={(active==='login')?"login-form":"hide-activity"}  onSubmit={(e)=>loginSubmit(e)}>
                        <h3>Login</h3>
                        <div className="cont-group">
                            <div className="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" className="inputText" name="email" value={login.email} onChange={(e)=>{setLogin({ ...login, [e.target.name]: e.target.value })}}/>
                                <span className="floating-label">Email Address <span style={{color: "red"}}>*</span></span>
                            </div>
                            <span id="id-err"></span>
                            <div className="user-input-wrp">
                                <br/>
                                <input id="id-input" type="password" className="inputText" name="password" value={login.password} onChange={(e)=>{setLogin({ ...login, [e.target.name]: e.target.value })}}/>
                                <span className="floating-label">Password <span style={{color: "red"}}>*</span></span>
                            </div>
                            <span id="id-err"></span>
                        </div>
                        <p>don't have an account? <span onClick={()=>{
                            setActive('register')
                            setResponse({message: '', type: ''})
                        }}>Register here</span></p>
                        <div className="resetting-pass">
                            <input type="submit" value="login" name="contact" className="contact-btn"/>
                            <p><Link to="/reset">forgot password?</Link></p>
                        </div>
                    </form>
                </div>
            </div>
          </section>
        </div>
    </Fragment>
  )
}

export default Auth