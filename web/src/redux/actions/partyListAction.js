import { fetchParties, joinParty } from '../../api/partyAPI'


export const FETCHING_PARTIES = 'partyList/FETCHING_PARTIES'
export const PARTY_FETCHED = 'partyList/PARTY_FETCHED'
export const JOIN_CLICK = 'partyList/JOIN_CLICK'
export const JOINING = 'partyList/JOINING'
export const JOINED = 'partyList/JOINED'
export const JOIN_FAILED = 'partyList/JOIN_FAILED'

export const fetchPartiesAction = () => dispatch => {
    dispatch({ type: FETCHING_PARTIES })
    fetchParties().then(result => {
        let partyList = []
        result.map((party => {
            partyList.push({
                partyId: party[0],
                img: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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