import { isValidUsername } from "6pp"

export const userNameValidation = (userName) => {
    if (!isValidUsername) {
        return {
            isValid: false,
            errorMessage: 'Invalid username'
        }
    }
}