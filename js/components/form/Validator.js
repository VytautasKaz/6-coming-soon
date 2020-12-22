class Validator {
    static isValidName(name) {
        return true;
    }
    static isValidEmail(email) {
        return true;
    }
    static isValidMessage(message) {
        return true;
    }
    static notEmptyString(text) {
        if (typeof text !== 'string'){
            return 'Has to be text.';
        }
        if (text === ''){
            return 'Can\'t be empty.';
        }
        return true;
    }
}
export {Validator}