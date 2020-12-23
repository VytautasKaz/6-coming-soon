class Validator {
    static isValidName(name) {
        if (Validator.notEmptyString(name) !== true){
            return Validator.notEmptyString(name);
        }
        if (Validator.onlyAlphabet(name) !== true){
            return Validator.onlyAlphabet(name);
        }
        if (Validator.onlyFirstLetterUppercase(name) !== true){
            return Validator.onlyFirstLetterUppercase(name);
        }
        return true;
    }
    static isValidEmail(email) {
        if (Validator.notEmptyString(email) !== true){
            return Validator.notEmptyString(email);
        }
        return true;
    }
    static isValidMessage(message) {
        if (Validator.notEmptyString(message) !== true){
            return Validator.notEmptyString(message);
        }
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
    static onlyAlphabet(text) {
        const abc = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        return Validator.onlyAllowedSymbols(text, abc);
    }
    static onlyNumbers(text) {
        const numbers = '0123456789';
        return Validator.onlyAllowedSymbols(text, numbers);
    }
    static onlyAllowedSymbols(text, allowedSymbols){
        let singleAllowedTextSymbol = false;
        for (let t of text) {
            for (let a of allowedSymbols) {
                if (a === t) {
                    singleAllowedTextSymbol = true;
                    break;
                }
                // allowedSymbols.includes(t);
            }
            // jei bent viena text raide yra neleistina, tai radom kritine klaida
            if (!singleAllowedTextSymbol) {
                return `Illegal symbol found: "${t}".`;
            }
        }
        return true;
    }
    static onlyFirstLetterUppercase(text){
        let lower = text.toLowerCase();
        let capitalize = lower[0].toUpperCase() + lower.slice(1);
        // let capitalize = text.replace(lower[0], lower[0].toUpperCase());
        if (text !== capitalize) {
            return 'First letter has to be uppercase, every other - lowercase.';
        }
        return true;
    }
}
export {Validator}