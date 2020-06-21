import { JOIN_CLICK } from '../actions/partyListAction'

export default (state = { 
    parties: [
        {
            partyId: 1,
            img: null,
            partyName: "hello world",
            members: 1,
            maximumMembers: 5
        },
        {
            partyId: 2,
            img: null,
            partyName: "qwerty",
            members: 1,
            maximumMembers: 5
        }
    ]
}, action) => {
    switch (action.type) {
        case JOIN_CLICK:
            return {
                ...state
            }
        default:
            return state
    }
}