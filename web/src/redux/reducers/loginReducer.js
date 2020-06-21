import { EMAIL_CHANGE, PASSWORD_CHANGE, EMAIL_NOT_EXIST, LOGIN_CLICK , LOGIN_FAILED} from '../actions/loginAction'
  
export default (state = { 
    email: "",
    password: "",
    isEmailExist: {},
    loginFailedMsg: ""
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
        case EMAIL_NOT_EXIST:
            return {
                ...state,
                isEmailExist: {"isExist": false, "message": action.payload}
            }
        case LOGIN_CLICK:
            return {
                ...state,
                isEmailExist: {}
            }
        case LOGIN_FAILED:
            return {
                ...state,
                loginFailedMsg: action.payload
            }
        default:
            return state
    }
}