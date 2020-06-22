import { createParty } from '../../api/partyAPI'

export const PARTY_NAME_CHANGE = 'partyCreation/PARTY_NAME_CHANGE'
export const MEMBER_CHANGE = 'partyCreation/MEMBER_CHANGE'
export const CREATE_PARTY_CLICK = 'partyCreation/CREATE_PARTY_CLICK'
export const CREATING_PARTY = 'partyCreation/CREATING_PARTY'
export const PARTY_CREATED = 'partyCreation/PARTY_CREATED'
export const PARTY_CREATE_FAILED = 'partyCreation/PARTY_CREATE_FAILED'
export const CLOSE_MODAL_AND_REDIRECT = 'partyCreation/CLOSE_MODAL_AND_REDIRECT'
export const CLOSE_MODAL = 'partyCreation/CLOSE_MODAL'
export const UPLOAD_FILE = 'partyCreation/UPLOAD_FILE'

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
    const base64Img = getState().partyCreation.base64Img
    dispatch({ type: CREATE_PARTY_CLICK })
    dispatch({ type: CREATING_PARTY })

    createParty(partyName, maxMembers, base64Img).then((result => {
        if(result.statusCode === 201) {
            dispatch({
                type: PARTY_CREATED,
                payload: result.message
            })
        }
        else {
            dispatch({
                type: PARTY_CREATE_FAILED,
                payload: "Something went wrong, please try again."
            })
        }
    }))
}

export const closeModalAndRedirect = () => dispatch => {
    dispatch({ type: CLOSE_MODAL_AND_REDIRECT })
    window.location.href = "/"
}

export const closeModal = () => dispatch => {
    dispatch({ type: CLOSE_MODAL })
}

export const uploadImage = (file) => dispatch => {
    toBase64(file).then(result => {
        dispatch({
            type: UPLOAD_FILE,
            payload: result
        })
    })
}

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});