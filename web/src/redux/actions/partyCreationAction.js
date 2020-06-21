export const PARTY_NAME_CHANGE = 'partyCreation/PARTY_NAME_CHANGE'
export const PEOPLE_CHANGE = 'partyCreation/PEOPLE_CHANGE'

export const onPartyNameChanged = (partyName) => dispatch => {
    dispatch({ 
        type: PARTY_NAME_CHANGE,
        payload: partyName
    })
}

export const onPeopleChanged = (people) => dispatch => {
    dispatch({
        type: PEOPLE_CHANGE,
        payload: people
    })
}