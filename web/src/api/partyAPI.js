import jwt from 'jwt-decode'

async function createParty(partyName, maxMembers, base64Img) {
    const hostname = window.location.hostname
    const url = "http://" + hostname + ":5000/party"
    const body = {
        party_name: partyName,
        max_members: parseInt(maxMembers),
        img: base64Img
    }
    const config = {
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
        method: "POST"
    }
    const response = await fetch(url, config)
    const statusCode = response.status
    const message = await response.text()
    return {
        message: message,
        statusCode: statusCode
    }
}

async function fetchParties() {
    const hostname = window.location.hostname
    const url = "http://" + hostname + ":5000/party"
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function joinParty(partyId, token) {
    const hostname = window.location.hostname
    const url = "http://" + hostname + ":5000/join-party/" + partyId
    const body = {
       user_email: jwt(token)['email']
    }
    console.log(body)
    const config = {
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
        method: "POST"
    }
    const response = await fetch(url, config)
    const statusCode = response.status
    const message = await response.text()
    return {
        message: message,
        statusCode: statusCode
    }
}


export {
    createParty,
    fetchParties,
    joinParty
}