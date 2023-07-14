import {data} from './phoneCodesStore.js'

const setPhoneMask = (form, country) => {
    //getting phone input by selector (allows us to use in any forms)
    const phone = form.querySelector('input[type="tel"]');
    phone.value = data[country];
}

const toggleDropDown = (e) => {
    const select = e.target.closest('.select');
    select.classList.toggle('active');
}

const setNewInputValue = (e) => {
    const option = e.target;
    const form = option.closest('form');
    const select = option.closest('.select');
    const selectValue = select.querySelector('.select__value');
    const value = option.getAttribute('data-value');

    selectValue.innerHTML = e.target.innerHTML
    select.classList.add('filled');
    setPhoneMask(form, value);
}

export const selectBind = () => {
    const selects = [...document.querySelectorAll('.select')];
    const options = [...document.querySelectorAll('.select__option')];

    selects.forEach(element => {
        element.addEventListener('click', toggleDropDown);
    });
    options.forEach(element => {
        element.addEventListener('click', setNewInputValue);
    });
}