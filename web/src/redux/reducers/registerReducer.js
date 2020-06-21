import { 
    EMAIL_CHANGE, 
    PASSWORD_CHANGE, 
    CONFIRM_PASSWORD_CHANGE, 
    TERM_CHECK, 
    PROMOTION_CHECK, 
    REGISTER_CLICK, 
    PASSWORD_NOT_MATCH,
    EMAIL_EXIST
} from '../actions/registerAction'
  
export default (state = { 
    email: "",
    password: "",
    confirmPassword: "",
    termCheck: false,
    promotionCheck: false,
    isPasswordMatch: true,
    isEmailExist: false
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
                isEmailExist: true
            }
        case PASSWORD_NOT_MATCH:
            return {
                ...state,
                isPasswordMatch: false
            }
        case EMAIL_EXIST:
            return {
                ...state,
                isEmailExist: true
            }
        default:
            return state
    }
}