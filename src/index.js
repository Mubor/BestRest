import { selectBind } from "./lib/select";

const signup = document.forms.signup;

signup.addEventListener('submit', (e) => {
    e.preventDefault();

    const selectValue = signup.querySelector('.select__value').innerHTML;

    if(signup.password.value !== signup.confirm.value && selectValue === 'empty') {
        console.log('Passwords must be similar');
        //other handler
        return
    }
    
    const data = new FormData(signup);
    const body = {
        country: selectValue,
    };
    
    for (const [key, value] of data) {
        body[key] = value;
    }

    console.log(body);
    //fetch requests
})

selectBind();