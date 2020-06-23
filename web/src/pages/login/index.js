import './style.scss'
import { connect } from 'react-redux'
import { onEmailChanged, onPasswordChanged, onLoginClicked, closeModal } from '../../redux/actions/loginAction'

import React from 'react';

const Login = ({ 
    onEmailChanged, 
    onPasswordChanged,
    onLoginClicked,
    closeModal,
    email, 
    password,
    isEmailExist,
    loginFailedMsg
}) => {
    return (
        <div id="login-container">
            <div id="login-form-container">
                <h1>Login</h1>
                <form id="login-form" onSubmit={(e) => {e.preventDefault(); onLoginClicked()}}>
                    <label>Email</label>
                    <input id="login-email-input" type="email" onChange={onEmailChanged} value={email} required></input>
                    <label>Password</label>
                    <input id="login-password-input" type="password" onChange={onPasswordChanged} value={password} required></input>
                    <div id="login-error-msg" className="error-msg-container">
                        {!isEmailExist.isExist && <p className="login-error-msg">{isEmailExist.message}</p>}
                    </div>
                    <div className="button-container">
                        <button 
                            id="login-button"
                            disabled={!email || !password}>
                                Login
                        </button>
                    </div>
                </form>
                <p>No account yet? <a id="sign-up" href="/register">Sign up for free!</a></p>
            </div>
            {loginFailedMsg && <div className="overlay"></div>}
            {
                loginFailedMsg && 
                <div id="login-failed-modal" className="modal">
                    <p id="login-failed-msg">{loginFailedMsg}</p>
                    <button id="login-failed-confirm-button" onClick={closeModal}>Confirm</button>
                </div>
            }
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
    onLoginClicked: () => dispatch(onLoginClicked()),
    closeModal: () => dispatch(closeModal())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Login)