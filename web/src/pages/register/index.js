import './style.scss'
import { connect } from 'react-redux'
import { onEmailChanged } from '../../redux/actions/registerAction'

import React from 'react';

const Register = ({ onEmailChanged, email }) => {
    return (
        <div onClick={onEmailChanged}>{email}</div>
    )
}

const mapStateToProps = state => ({
    email: state.register.email
})
  
const mapDispatchToProps = dispatch => ({
    onEmailChanged: () => dispatch(onEmailChanged()),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Register)