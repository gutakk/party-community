import { PARTY_NAME_CHANGE, MEMBER_CHANGE, PARTY_CREATED, PARTY_CREATE_FAILED, CLOSE_MODAL, UPLOAD_FILE } from '../actions/partyCreationAction'
  
export default (state = { 
    partyName: "",
    maxMembers: "",
    base64Img: "",
    createSuccessMsg: "",
    createFailedMsg: ""
}, action) => {
    switch (action.type) {
        case PARTY_NAME_CHANGE:
            return {
                ...state,
                partyName: action.payload
            }
        case MEMBER_CHANGE:
            return {
                ...state,
                maxMembers: action.payload
            }
        case PARTY_CREATED:
            return {
                ...state,
                createSuccessMsg: action.payload
            }
        case PARTY_CREATE_FAILED:
            return {
                ...state,
                createFailedMsg: action.payload
            }
        case CLOSE_MODAL:
            return {
                ...state,
                createSuccessMsg: "",
                createFailedMsg: "",
                base64Img: ""
            }
        case UPLOAD_FILE:
            return {
                ...state,
                base64Img: action.payload
            }
        default:
            return state
    }
}