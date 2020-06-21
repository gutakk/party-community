import { PARTY_NAME_CHANGE, MEMBER_CHANGE } from '../actions/partyCreationAction'
  
export default (state = { 
    partyName: "",
    maxMembers: ""
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
                maxMembers: action.payload
            }
        default:
            return state
    }
}