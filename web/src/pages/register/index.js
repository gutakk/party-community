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
                <form onSubmit={(e) => {e.preventDefault(); onRegisterClicked()}}>
                    <label>Email</label>
                    <input type="email" onChange={onEmailChanged} value={email}></input>
                    <label>Password</label>
                    <input type="password" onChange={onPasswordChanged} value={password}></input>
                    <label>Confirm Password</label>
                    <input type="password" onChange={onConfirmPasswordChanged} value={confirmPassword}></input>
                    <div className="checkbox-container">
                        <input type="checkbox" onChange={onTermChanged}></input>
                        <label>I agree term and condition to use PartyHaan</label>
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" onChange={onPromotionChanged}></input>
                        <label>I want to receive news and promotion from PartyHaan</label>
                    </div>
                    <div className="error-msg-container">
                        { !isPasswordMatch && <p className="register-error-msg">Password not match</p>}
                        { isEmailExist.isExist && <p className="register-error-msg">{isEmailExist.message}</p>}
                    </div>
                    <div className="button-container">
                        <button
                            disabled={!termChecked || !promotionChecked || !email || !password || !confirmPassword}>
                            Register
                        </button>
                    </div>
                </form>
            </div>
            {(registerSuccessMsg || registerFailedMsg) && <div className="overlay"></div>}
            {
                registerSuccessMsg && 
                <div className="modal">
                    <p>{registerSuccessMsg}</p>
                    <button onClick={closeModalAndRedirect}>Confirm</button>
                </div>
            }
            {
                registerFailedMsg && 
                <div className="modal">
                    <p>{registerFailedMsg}</p>
                    <button onClick={closeModal}>Confirm</button>
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