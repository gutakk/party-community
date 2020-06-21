async function register(email, password) {
    const url = "http://localhost:5000/user"
    const body = {
        email: email,
        password: password
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
    const token = await response.text()
    return {
        token: token,
        statusCode: statusCode
    }
}

export {
    register
}