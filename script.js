const loginInput = document.querySelector('.login-input')
const passwordInput = document.querySelector('.password-input')
const text = document.querySelector('.main-text')
let loginS = 'feyzi'
let passwordS = 'feyzi'
function login() {
if (loginInput.value == loginS && passwordInput.value == passwordS) {
text.innerHTML = 'Авторизация прошла успешно'
loginInput.value = null
passwordInput.value = null
window.open('https://forum.arizona-rp.com/forums/1086/ ');
} else {
text.innerHTML = 'Ошибка'
loginInp3ut.value = null
passwordInput.value = null
}
}