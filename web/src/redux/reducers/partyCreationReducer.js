import { PARTY_NAME_CHANGE, MEMBER_CHANGE, PARTY_CREATED, PARTY_CREATE_FAILED } from '../actions/partyCreationAction'
  
export default (state = { 
    partyName: "",
    maxMembers: "",
    createSuccessMsg: "",
    createFailedMsg: ""
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
        case PARTY_CREATED:
            return {
                ...state,
                createSuccessMsg: action.payload
            }
        case PARTY_CREATE_FAILED:
            return {
                ...state,
                createFailedMsg: action.payload
            }
        default:
            return state
    }
}