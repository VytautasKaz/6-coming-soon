import {Validator} from './Validator.js';

function formValidation() {
    const forms = document.querySelectorAll('form.form');
    for (let form of forms) {
        const validables = form.querySelectorAll('[data-validation]');
        const submit = form.querySelector('button[type="submit"]');
        const validationResults = [];
        submit.addEventListener('click', event => {
            event.preventDefault();
            for (let input of validables) {
                const rule = input.dataset.validation;
                const text = input.Value;
                let results = null;
                if (rule === 'name') {
                    results = Validator.isValidName();
                }
                if (rule === 'email') {
                    results = Validator.isValidEmail();
                }
                if (rule === 'message') {
                results = Validator.isValidMessage();
                }
                validation.push(results);
            }
            console.log(validationResults);
        })
    }
}
export {formValidation}