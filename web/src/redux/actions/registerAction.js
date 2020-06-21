import { register } from '../../api/userAPI'

export const EMAIL_CHANGE = 'register/EMAIL_CHANGE'
export const PASSWORD_CHANGE = 'register/PASSWORD_CHANGE'
export const CONFIRM_PASSWORD_CHANGE = 'register/CONFIRM_PASSWORD_CHANGE'
export const TERM_CHECK = 'register/TERM_CHECK'
export const PROMOTION_CHECK = 'register/PROMOTION_CHECK'
export const REGISTER_CLICK = 'register/REGISTER_CLICK'
export const REGISTERING = 'register/REGISTERING'
export const REGISTERED = 'register/REGISTERED'

export const onEmailChanged = (email) => dispatch => {
    dispatch({ 
        type: EMAIL_CHANGE,
        payload: email
    })
}

export const onPasswordChanged = (password) => dispatch => {
    dispatch({
        type: PASSWORD_CHANGE,
        payload: password
    })
}

export const onConfirmPasswordChanged = (password) => dispatch => {
    dispatch({
        type: CONFIRM_PASSWORD_CHANGE,
        payload: password
    })
}

export const onTermChanged = (checked) => dispatch => {
    dispatch({
        type: TERM_CHECK,
        payload: checked
    })
}

export const onPromotionChanged = (checked) => dispatch => {
    dispatch({
        type: PROMOTION_CHECK,
        payload: checked
    })
}

export const onRegisterClicked = (x, y) => (dispatch, getState) => {
    const email = getState().register.email
    const password = getState().register.password
    dispatch({ type: REGISTER_CLICK })
    dispatch({ type: REGISTERING })
    register(email, password)
}