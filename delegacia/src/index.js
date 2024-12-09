import { newNotification } from "./toast.js"

const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    if (usernameInput.value === 'Billy_675' && passwordInput.value === '33H2@#') {
        const a = document.querySelector('a')
        a.href = './home.html'
    } else {
        newNotification('As credenciais estão incorretas!')
    }
})

