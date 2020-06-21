import { 
    EMAIL_CHANGE, 
    PASSWORD_CHANGE, 
    CONFIRM_PASSWORD_CHANGE, 
    TERM_CHECK, 
    PROMOTION_CHECK, 
    REGISTER_CLICK, 
    PASSWORD_NOT_MATCH,
    EMAIL_EXIST,
    REGISTERED
} from '../actions/registerAction'
  
export default (state = { 
    email: "",
    password: "",
    confirmPassword: "",
    termCheck: false,
    promotionCheck: false,
    isPasswordMatch: true,
    isEmailExist: {},
    registerSuccessMsg: ""
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
        case CONFIRM_PASSWORD_CHANGE:
            return {
                ...state,
                confirmPassword: action.payload
            }
        case TERM_CHECK:
            return {
                ...state,
                termCheck: action.payload
            }
        case PROMOTION_CHECK:
            return {
                ...state,
                promotionCheck: action.payload
            }
        case REGISTER_CLICK:
            return {
                ...state,
                isPasswordMatch: true,
                isEmailExist: {}
            }
        case PASSWORD_NOT_MATCH:
            return {
                ...state,
                isPasswordMatch: false
            }
        case EMAIL_EXIST:
            return {
                ...state,
                isEmailExist: {"isExist": true, "message": action.payload}
            }
        case REGISTERED:
            return {
                ...state,
                registerSuccessMsg: action.payload
            }
        default:
            return state
    }
}