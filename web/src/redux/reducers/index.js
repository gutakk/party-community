
import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import partyCrationReducer from './partyCrationReducer'
import registerReducer from './registerReducer'

export default combineReducers({
    login: loginReducer,
    partyCreation: partyCrationReducer,
    register: registerReducer,
})