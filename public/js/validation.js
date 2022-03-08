function Validation(formSelector, messageErrorSelector) {
    const ruleFunctions = {
        required(value, messageError = "Vui lòng nhập trường này") {
            return value ? undefined : messageError;
        },
        email(value, messageError = "Trường này phải là email") {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : messageError;
        }
    }

    const formElement = document.querySelector(formSelector);
    if (formElement) {
        const inputElements = formElement.querySelectorAll('input[rules]');
        Array.from(inputElements).forEach((inputElement, index) => {
            inputElement.onblur = (e) => {
                const rules = e.target.getAttribute('rules').split(':');
                var messageError = undefined;
                rules.forEach((rule, index) => {
                    if (!messageError) messageError = ruleFunctions[rule](e.target.value);
                })
                var messageErrorElement = e.target.parentElement.querySelector(messageErrorSelector);;
                if (messageError) messageErrorElement.innerText = messageError;
            }
            inputElement.oninput = (e) => {
                var messageErrorElement = e.target.parentElement.querySelector(messageErrorSelector);
                messageErrorElement.innerText = '';
            }
        })

        formElement.onsubmit = (e) => {
            let isValid = true;
            var messageError = undefined;
            Array.from(inputElements).forEach((inputElement, index) => {
                const rules = inputElement.getAttribute('rules').split(':');
                rules.forEach((rule, index) => {
                    if (!messageError) messageError = ruleFunctions[rule](inputElement.value);
                })
                var messageErrorElement = inputElement.parentElement.querySelector(messageErrorSelector);;
                if (messageError) {
                    messageErrorElement.innerText = messageError;
                    isValid = false;
                }
            })
            if (!isValid) {
                const modalFormElement = document.querySelector('.modal-form');
                const modalFormBtnElement = document.querySelector('.modal-form-btn');
                e.preventDefault();
                modalFormBtnElement.onclick = (e) => {
                    modalFormElement.classList.remove('active');
                }
                modalFormElement.classList.add('active');
            }
        }
    }
}