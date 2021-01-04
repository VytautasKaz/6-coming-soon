import {isValidInput} from './isValidInput.js';
import {isValidSocialItem} from './isValidSocialItem.js';
function renderSocials(selector, data) {
    if (!isValidInput(selector, data)) {
        return false;
    }
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return false;
    }
    let HTML = '';
    for (let item of data) { // let item = data[i]
        if (!isValidSocialItem(item)){
            continue;
        }
        HTML += `<a href="${item.href}" target="_blank" class="fa fa-${item.icon}"></a>`;
    }
    if (HTML === ''){
        return false;
    }
    DOM.innerHTML += HTML;
    return true;
}
export {renderSocials}