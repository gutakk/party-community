import { PARTY_FETCHED } from '../actions/partyListAction'

export default (state = { 
    parties: []
}, action) => {
    switch (action.type) {
        case PARTY_FETCHED:
            return {
                ...state,
                parties: action.payload
            }
        default:
            return state
    }
}