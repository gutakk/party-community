import { fetchParties, joinParty } from '../../api/partyAPI'


export const FETCHING_PARTIES = 'partyList/FETCHING_PARTIES'
export const PARTY_FETCHED = 'partyList/PARTY_FETCHED'
export const JOIN_CLICK = 'partyList/JOIN_CLICK'
export const JOINING = 'partyList/JOINING'
export const JOINED = 'partyList/JOINED'
export const JOIN_FAILED = 'partyList/JOIN_FAILED'
export const CLOSE_MODAL = 'partyList/CLOSE_MODAL'

export const fetchPartiesAction = () => dispatch => {
    dispatch({ type: FETCHING_PARTIES })
    fetchParties().then(result => {
        let partyList = []
        result.map((party => {
            partyList.push({
                partyId: party[0],
                img: "https://i.ytimg.com/vi/GV3HUDMQ-F8/maxresdefault.jpg",
                partyName: party[1],
                members: party[2],
                maximumMembers: party[3]
            })
        }))
        dispatch({
            type: PARTY_FETCHED,
            payload: partyList
        })
    })
}

export const onJoinClicked = (partyId) => dispatch => {
    const token = localStorage.getItem('token')
    if(token) {
        dispatch({ type: JOIN_CLICK })
        dispatch({ type: JOINING })
        joinParty(partyId, token).then(result => {
            if(result.statusCode === 200) {
                dispatch({
                    type: JOINED,
                    payload: result.message
                })
            }
            else if(result.statusCode === 400) {
                dispatch({
                    type: JOIN_FAILED,
                    payload: result.message
                })
            }
            else {
                dispatch({
                    type: JOIN_FAILED,
                    payload: "Something went wrong, please try again."
                })
            }
        })
    }
    else {
        window.location.href = '/login'
    }
}

export const closeModal = () => dispatch => {
    dispatch({ type: CLOSE_MODAL })
}