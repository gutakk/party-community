import { PARTY_FETCHED, JOINED, JOIN_FAILED } from '../actions/partyListAction'

export default (state = { 
    parties: [],
    joinedMsg: "",
    joinedFailedMsg: ""
}, action) => {
    switch (action.type) {
        case PARTY_FETCHED:
            return {
                ...state,
                parties: action.payload
            }
        case JOINED:
            return {
                ...state,
                joinedMsg: action.payload
            }
        case JOIN_FAILED:
            return {
                ...state,
                joinedFailedMsg: action.payload
            }
        default:
            return state
    }
}