import './style.scss'
import { connect } from 'react-redux'
import { onEmailChanged, onPasswordChanged, onConfirmPasswordChanged, onTermChanged, onPromotionChanged } from '../../redux/actions/registerAction'

import React from 'react';

const Register = ({ 
    onEmailChanged, 
    onPasswordChanged, 
    onConfirmPasswordChanged,
    onTermChanged,
    onPromotionChanged,
    email, 
    password,
    confirmPassword,
    termChecked,
    promotionChecked
}) => {
    return (
        <div id="register-container">
            <form>
                <label>Email</label>
                <input type="email" onChange={onEmailChanged} value={email} required></input>
                <label>Password</label>
                <input type="password" onChange={onPasswordChanged} value={password} required></input>
                <label>Confirm Password</label>
                <input type="password" onChange={onConfirmPasswordChanged} value={confirmPassword} required></input>
                <input type="checkbox" onChange={onTermChanged}></input>
                <label>I agree term and condition to use PartyHaan</label>
                <input type="checkbox" onChange={onPromotionChanged}></input>
                <label>I want to receive news and promotion from PartyHaan</label>
                <button 
                    type="submit" 
                    disabled={!termChecked || !promotionChecked || !email || !password || !confirmPassword}>
                        Register
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    email: state.register.email,
    password: state.register.password,
    confirmPassword: state.register.confirmPassword,
    termChecked: state.register.termCheck,
    promotionChecked: state.register.promotionCheck
})
  
const mapDispatchToProps = dispatch => ({
    onEmailChanged: (e) => dispatch(onEmailChanged(e.target.value)),
    onPasswordChanged: (e) => dispatch(onPasswordChanged(e.target.value)),
    onConfirmPasswordChanged: (e) => dispatch(onConfirmPasswordChanged(e.target.value)),
    onTermChanged: (e) => dispatch(onTermChanged(e.target.checked)),
    onPromotionChanged: (e) => dispatch(onPromotionChanged(e.target.checked))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Register)