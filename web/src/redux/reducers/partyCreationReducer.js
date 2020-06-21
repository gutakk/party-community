import { PARTY_NAME_CHANGE, MEMBER_CHANGE } from '../actions/partyCreationAction'
  
export default (state = { 
    partyName: "",
    members: null
}, action) => {
    switch (action.type) {
        case PARTY_NAME_CHANGE:
            return {
                ...state,
                partyName: action.payload
            }
        case MEMBER_CHANGE:
            return {
                ...state,
                members: action.payload
            }
        default:
            return state
    }
}