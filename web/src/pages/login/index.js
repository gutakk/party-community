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
                <form onSubmit={(e) => {e.preventDefault(); onLoginClicked()}}>
                    <label>Email</label>
                    <input type="email" onChange={onEmailChanged} value={email} required></input>
                    <label>Password</label>
                    <input type="password" onChange={onPasswordChanged} value={password} required></input>
                    <div className="error-msg-container">
                        {!isEmailExist.isExist && <p className="login-error-msg">{isEmailExist.message}</p>}
                    </div>
                    <div className="button-container">
                        <button 
                            disabled={!email || !password}>
                                Login
                        </button>
                    </div>
                </form>
                <p>No account yet? <a href="/register">Sign up for free!</a></p>
            </div>
            {loginFailedMsg && <div className="overlay"></div>}
            {
                loginFailedMsg && 
                <div className="modal">
                    <p>{loginFailedMsg}</p>
                    <button onClick={closeModal}>Confirm</button>
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