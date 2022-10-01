import throttle from 'lodash.throttle';

// const formRef = document.querySelector('.feedback-form');
const LOCALE_STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form textarea'),
    lable: document.querySelector('.feedback-form lable'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onTextareaInput, 1000));

refs.form.addEventListener('input', evt => {
    formData[evt.target.name] = evt.target.value;
    const inputJson = JSON.stringify(refs.input);
    localStorage.setItem(LOCALE_STORAGE_KEY, inputJson);
    console.log(formData);
});

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(LOCALE_STORAGE_KEY);
};

function onTextareaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem(LOCALE_STORAGE_KEY, message);
};


function populateTextarea() {
    const savedMess = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (savedMess) {
        refs.input.value = savedMess;
    }
};
























// const inputRef = document.querySelectorAll('.feedback-form label');

// const LOCALE_STORAGE_KEY = 'feedback-form-state';

// formRef.addEventListener('submit', onFormSubmit);
// formRef.addEventListener('input', throttle(onTextareaInput, 500));


// populateTextarea();

// function onFormSubmit(evt) {
//     evt.preventDefault();
//     evt.currentTarget.reset();
//     localStorage.removeItem(LOCALE_STORAGE_KEY);
// }

// function onTextareaInput(evt) {
//     const message = evt.currentTarget.value;
//     localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(message));
// }


// function populateTextarea() {
//     const savedMessage = localStorage.getItem(LOCALE_STORAGE_KEY);
//     const parsedMessage = JSON.parse(savedMessage);
//     if (savedMessage) {
//         input.value = savedMessage;
//     }
// }


