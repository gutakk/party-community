import './style.scss'
import { connect } from 'react-redux'
import { 
    onEmailChanged, 
    onPasswordChanged, 
    onConfirmPasswordChanged, 
    onTermChanged, 
    onPromotionChanged, 
    onRegisterClicked,
    closeModalAndRedirect,
    closeModal
} from '../../redux/actions/registerAction'

import React from 'react';

const Register = ({ 
    onEmailChanged, 
    onPasswordChanged, 
    onConfirmPasswordChanged,
    onTermChanged,
    onPromotionChanged,
    onRegisterClicked,
    closeModalAndRedirect,
    closeModal,
    email, 
    password,
    confirmPassword,
    termChecked,
    promotionChecked,
    isPasswordMatch,
    isEmailExist,
    registerSuccessMsg,
    registerFailedMsg,
}) => {
    return (
        <div id="register-container">
            <div id="register-form-container">
                <h1>Registration</h1>
                <form id="register-form" onSubmit={(e) => {e.preventDefault(); onRegisterClicked()}}>
                    <label>Email</label>
                    <input id="register-email-input" type="email" onChange={onEmailChanged} value={email}></input>
                    <label>Password</label>
                    <input id="register-password-input" type="password" onChange={onPasswordChanged} value={password}></input>
                    <label>Confirm Password</label>
                    <input id="register-confirm-password-input" type="password" onChange={onConfirmPasswordChanged} value={confirmPassword}></input>
                    <div className="checkbox-container">
                        <input id="register-term-checkbox-input" type="checkbox" onChange={onTermChanged}></input>
                        <label>I agree term and condition to use PartyHaan</label>
                    </div>
                    <div className="checkbox-container">
                        <input id="register-news-checkbox-input" type="checkbox" onChange={onPromotionChanged}></input>
                        <label>I want to receive news and promotion from PartyHaan</label>
                    </div>
                    <div id="register-error-msg-container" className="error-msg-container">
                        { !isPasswordMatch && <p id="register-password-not-match" className="register-error-msg">Password not match</p>}
                        { isEmailExist.isExist && <p id="register-email-exist" className="register-error-msg">{isEmailExist.message}</p>}
                    </div>
                    <div className="button-container">
                        <button
                            id="register-button"
                            disabled={!termChecked || !promotionChecked || !email || !password || !confirmPassword}>
                            Register
                        </button>
                    </div>
                </form>
            </div>
            {(registerSuccessMsg || registerFailedMsg) && <div className="overlay"></div>}
            {
                registerSuccessMsg && 
                <div id="register-success-modal" className="modal">
                    <p id="register-success-msg">{registerSuccessMsg}</p>
                    <button id="register-success-confirm-button" onClick={closeModalAndRedirect}>Confirm</button>
                </div>
            }
            {
                registerFailedMsg && 
                <div id="register-failed-modal" className="modal">
                    <p id="register-failed-msg">{registerFailedMsg}</p>
                    <button id="register-failed-confirm-button" onClick={closeModal}>Confirm</button>
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    email: state.register.email,
    password: state.register.password,
    confirmPassword: state.register.confirmPassword,
    termChecked: state.register.termCheck,
    promotionChecked: state.register.promotionCheck,
    isPasswordMatch: state.register.isPasswordMatch,
    isEmailExist: state.register.isEmailExist,
    registerSuccessMsg: state.register.registerSuccessMsg,
    registerFailedMsg: state.register.registerFailedMsg
})
  
const mapDispatchToProps = dispatch => ({
    onEmailChanged: (e) => dispatch(onEmailChanged(e.target.value)),
    onPasswordChanged: (e) => dispatch(onPasswordChanged(e.target.value)),
    onConfirmPasswordChanged: (e) => dispatch(onConfirmPasswordChanged(e.target.value)),
    onTermChanged: (e) => dispatch(onTermChanged(e.target.checked)),
    onPromotionChanged: (e) => dispatch(onPromotionChanged(e.target.checked)),
    onRegisterClicked: () => dispatch(onRegisterClicked()),
    closeModalAndRedirect: () => dispatch(closeModalAndRedirect()),
    closeModal: () => dispatch(closeModal())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Register)