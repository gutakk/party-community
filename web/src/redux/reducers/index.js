
import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import partyCreationReducer from './partyCreationReducer'
import partyListReducer from './partyListReducer'
import registerReducer from './registerReducer'

export default combineReducers({
    login: loginReducer,
    partyCreation: partyCreationReducer,
    partyList: partyListReducer,
    register: registerReducer,
})