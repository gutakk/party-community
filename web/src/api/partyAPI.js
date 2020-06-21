async function createParty(partyName, maxMembers) {
    const url = "http://localhost:5000/party"
    const body = {
        party_name: partyName,
        max_members: parseInt(maxMembers)
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

export {
    createParty,
}