import {Validator} from './Validator.js';

function formValidation() {
    const forms = document.querySelectorAll('form.form');
    for (let form of forms) {
        const validables = form.querySelectorAll('[data-validation]');
        const submit = form.querySelector('button[type="submit"]');
        const validationResults = [];
        let validCount = 0;
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
                validationResults.push(results);
                if (results === true) {
                    validCount++;
                }
                if (validCount === validables.length) {
                    console.log('jeigu visi true, siunciam info i serveri');
                } else {
                    console.log('israsome klaidas');
                    console.log(validationResults);
                }
            }
        })
    }
}
export {formValidation}