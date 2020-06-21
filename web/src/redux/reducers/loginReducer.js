import { EMAIL_CHANGE, PASSWORD_CHANGE } from '../actions/loginAction'
  
export default (state = { 
    email: null,
    password: null
}, action) => {
    switch (action.type) {
        case EMAIL_CHANGE:
            return {
                ...state,
                email: action.payload
            }
        case PASSWORD_CHANGE:
            return {
                ...state,
                password: action.payload
            }
        default:
            return state
    }
}