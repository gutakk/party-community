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
        default:
            return state
    }
}