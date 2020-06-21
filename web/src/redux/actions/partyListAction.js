export const PARTY_NAME_CHANGE = 'partyCreation/PARTY_NAME_CHANGE'
export const MEMBER_CHANGE = 'partyCreation/MEMBER_CHANGE'

export const onPartyNameChanged = (partyName) => dispatch => {
    dispatch({ 
        type: PARTY_NAME_CHANGE,
        payload: partyName
    })
}

export const onMemberChanged = (members) => dispatch => {
    dispatch({
        type: MEMBER_CHANGE,
        payload: members
    })
}