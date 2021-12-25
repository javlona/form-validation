const userName = document.querySelector('#userName')
const phone = document.querySelector('#phone')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passwordConfirmation = document.querySelector('#passwordConfirmation')

userName.addEventListener('blur', () => {
    if(userName.value.length < 6) {
        showDanger(userName)
    } else {
        showSuccess(userName)
    }
})

phone.addEventListener('blur', () => {
    if(phone.value.length < 10) {
        showDanger(phone)
    } else {
        showSuccess(phone)
        formatPhoneNumber(phone.innerText)
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
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
}