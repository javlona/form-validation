const userName = document.querySelector('#userName')
const phone = document.querySelector('#phone')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passwordConfirmation = document.querySelector('#passwordConfirmation')
const form = document.querySelector('#form')
const onlyNum = /^\d+$/

//form.addeventListener('submit', (e) => e.preventDefault())

userName.addEventListener('blur', () => {
    if(userName.value.length < 6) {
        showDanger(userName)
    } else {
        showSuccess(userName)
    }
})

// validate phone number
phone.addEventListener('blur', () => {
    if(phone.value.length < 10 ) {
        showDanger(phone)
    } else {
        showSuccess(phone)
        formatPhoneNumber(phone.value)
    }

})

// validate password
email.addEventListener('blur', () => {
    const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(emailCheck.test(email.value)) {
        showSuccess(email)
    } else {
        showDanger(email)
    }
})



// show danger message 
function showDanger(el) {
    el.classList.add('danger')
    el.nextElementSibling.classList.add('active')
} 

// remove danger and show success
function showSuccess(el) {
    el.classList.remove('danger')
    el.classList.add('success')
    el.nextElementSibling.classList.remove('active')
}

// US phone number formatter 
function formatPhoneNumber(phone) {
    var cleaned = ('' + phone).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        phone = '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
}