export const JOIN_CLICK = 'partyList/JOIN_CLICK'

export const onJoinClicked = (partyId) => dispatch => {
    const token = localStorage.getItem('token')
    if(token) {
        dispatch({ 
            type: JOIN_CLICK
        })
    }
    else {
        window.location.href = '/login'
    }
}