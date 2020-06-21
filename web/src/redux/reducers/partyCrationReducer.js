import { PARTY_NAME_CHANGE, PEOPLE_CHANGE } from '../actions/partyCreationAction'
  
export default (state = { 
    partyName: null,
    people: null
}, action) => {
    switch (action.type) {
        case PARTY_NAME_CHANGE:
            console.log(action)
            return {
                ...state,
                partyName: action.payload
            }
        case PEOPLE_CHANGE:
            return {
                ...state,
                people: action.payload
            }
        default:
            return state
    }
}