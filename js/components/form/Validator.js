class Validator {
    static isValidName(name) {
        const notEmptyString = Validator.notEmptyString(name);
        if (notEmptyString !== true) return notEmptyString;

        const onlyAlphabet = Validator.onlyAlphabet(name);
        if (onlyAlphabet !== true) return onlyAlphabet;

        const onlyFirstLetterUppercase = Validator.onlyFirstLetterUppercase(name);
        if (onlyFirstLetterUppercase !== true) return onlyFirstLetterUppercase;

        return true;
    }
    static isValidEmail(email) {
        const notEmptyString = Validator.notEmptyString(email);
        if (notEmptyString !== true) return notEmptyString;

        const minEmailCharAmount = Validator.minEmailCharAmount(email);
        if (minEmailCharAmount !== true) return minEmailCharAmount;

        const onlyOneAt = Validator.onlyOneAt(email);
        if (onlyOneAt !== true) return onlyOneAt;

        const charsPreAtSymbol = Validator.charsPreAtSymbol(email);
        if (charsPreAtSymbol !== true) return charsPreAtSymbol;

        const charsAfterAtSymbol = Validator.charsAfterAtSymbol(email);
        if (charsAfterAtSymbol !== true) return charsAfterAtSymbol;

        return true;
    }
    static isValidMessage(message) {
        const notEmptyString = Validator.notEmptyString(message);
        if (notEmptyString !== true) return notEmptyString;
        
        const exceedsChar = Validator.exceedsChar(message);
        if (exceedsChar !== true) return exceedsChar;

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
    static exceedsChar(text){
        if (text.length > 1000){
            return 'Message cannot exceed 1000 characters.';
        }
        return true;
    }
    static minEmailCharAmount(text){
        if (text.length < 6){
            return 'E-mail cannot be shorter than 6 characters.';
        }
        return true;
    }
    static onlyOneAt(text){
        let atArray = [];
        for (let i = 0; i < text.length; i++){
            if (text[i] === '@'){
                atArray.push(text[i]);
                if (atArray.length > 1 || atArray.length === 0){
                    return 'Only one @ symbol allowed.';
                }
            }
        }
        return true;
    }
    static charsPreAtSymbol(text){
        let textArray = [];
        for (let i = 0; i < text.length; i++){
            if (text[i] !== '@'){
                textArray.push(text[i]);
            } else {
                break;
            }
        }
        if (textArray.length < 1){
            return 'Email address has to contain a name.';
        }
        return true;
    }
    static charsAfterAtSymbol(text){
        let charsAfter = text.slice(text.indexOf('@'));
        let charsArray = charsAfter.toString().split('');
        if ((charsArray.length - 1) < 4){
            return 'There has to be at least 4 characters after @ symbol.';
        }
        return true;
    }
}
export {Validator}