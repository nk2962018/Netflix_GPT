export const checkValidData = (email, password) => {
    const isEmailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    const isValidPassowrd = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/.test(password)

    if(!isEmailValid) return "email is not valid"
    if(!isValidPassowrd) return "password not valid"

    return null;
} 


// password validation
// Minimum 6 characters
// At least 1 upper case English letter
// At least 1 lower case English letter
// At least 1 letter
// At least 1 special character