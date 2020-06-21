import './style.scss'
import { connect } from 'react-redux'
import { onEmailChanged, onPasswordChanged, onLoginClicked } from '../../redux/actions/loginAction'

import React from 'react';

const Login = ({ 
    onEmailChanged, 
    onPasswordChanged,
    onLoginClicked,
    email, 
    password,
    isEmailExist,
    loginFailedMsg
}) => {
    return (
        <div id="login-container">
            <form onSubmit={(e) => {e.preventDefault(); onLoginClicked()}}>
                <label>Email</label>
                <input type="email" onChange={onEmailChanged} value={email} required></input>
                <label>Password</label>
                <input type="password" onChange={onPasswordChanged} value={password} required></input>
                {!isEmailExist.isExist && <p className="login-error-msg">{isEmailExist.message}</p>}
                <button 
                    disabled={!email || !password}>
                        Login
                </button>
            </form>
            <p>No account yet? <a href="/register">Sign up for free!</a></p>
            {loginFailedMsg && <div className="modal">{loginFailedMsg}</div>}
        </div>
    )
}

const mapStateToProps = state => ({
    email: state.login.email,
    password: state.login.password,
    isEmailExist: state.login.isEmailExist,
    loginFailedMsg: state.login.loginFailedMsg
})
  
const mapDispatchToProps = dispatch => ({
    onEmailChanged: (e) => dispatch(onEmailChanged(e.target.value)),
    onPasswordChanged: (e) => dispatch(onPasswordChanged(e.target.value)),
    onLoginClicked: () => dispatch(onLoginClicked())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Login)