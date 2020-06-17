import { EMAIL_CHANGE } from '../actions/registerAction'
  
export default (state = { 
    email: "hello@test.com"
}, action) => {
    switch (action.type) {
        case EMAIL_CHANGE:
            return {
                ...state,
                email: "qwerty@e.c"
            }
        default:
            return state
    }
}