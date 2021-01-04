function isValidSocialItem(item) {
    if (typeof item !== 'object'){
        return false;
    }
    return true;
}
export {isValidSocialItem}