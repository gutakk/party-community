import { createParty } from '../../api/partyAPI'

export const PARTY_NAME_CHANGE = 'partyCreation/PARTY_NAME_CHANGE'
export const MEMBER_CHANGE = 'partyCreation/MEMBER_CHANGE'
export const CREATE_PARTY_CLICK = 'partyCreation/CREATE_PARTY_CLICK'
export const CREATING_PARTY = 'partyCreation/CREATING_PARTY'

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

export const onCreatePartyClicked = () => (dispatch, getState) => {
    const partyName = getState().partyCreation.partyName
    const maxMembers = getState().partyCreation.maxMembers
    dispatch({ type: CREATE_PARTY_CLICK })
    dispatch({ type: CREATING_PARTY })

    createParty(partyName, maxMembers)
}