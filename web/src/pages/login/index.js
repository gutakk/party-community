import './style.scss'
import { connect } from 'react-redux'
import { onEmailChanged, onPasswordChanged } from '../../redux/actions/loginAction'

import React from 'react';

const Login = ({ 
    onEmailChanged, 
    onPasswordChanged,
    email, 
    password
}) => {
    return (
        <div id="login-container">
            <form>
                <label>Email</label>
                <input type="email" onChange={onEmailChanged} value={email} required></input>
                <label>Password</label>
                <input type="password" onChange={onPasswordChanged} value={password} required></input>
                <button 
                    type="submit" 
                    disabled={!email || !password}>
                        Login
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    email: state.login.email,
    password: state.login.password
})
  
const mapDispatchToProps = dispatch => ({
    onEmailChanged: (e) => dispatch(onEmailChanged(e.target.value)),
    onPasswordChanged: (e) => dispatch(onPasswordChanged(e.target.value))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Login)