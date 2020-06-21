import { EMAIL_CHANGE, PASSWORD_CHANGE } from '../actions/loginAction'
  
export default (state = { 
    email: "",
    password: ""
}, action) => {
    switch (action.type) {
        case EMAIL_CHANGE:
            console.log(action)
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