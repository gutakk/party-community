export const EMAIL_CHANGE = 'register/EMAIL_CHANGE'

export const onEmailChanged = (test) => dispatch => {
    dispatch({ 
        type: EMAIL_CHANGE,
        payload: test
    })
}