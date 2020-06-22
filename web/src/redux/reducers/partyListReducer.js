import { PARTY_FETCHED, JOINED, JOIN_FAILED, CLOSE_MODAL } from '../actions/partyListAction'

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
        case CLOSE_MODAL:
            return {
                ...state,
                joinedMsg: "",
                joinedFailedMsg: ""
            }
        default:
            return state
    }
}