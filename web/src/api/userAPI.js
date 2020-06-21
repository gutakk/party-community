async function register(email, password) {
    const url = "http://localhost:5000/user"
    console.log(email)
    console.log(password)
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
    const message = await response.text()
    return message, statusCode
}

export {
    register
}