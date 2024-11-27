const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')

usernameInput.addEventListener('change', verification)
passwordInput.addEventListener('change', verification)

function verification() {
    console.log(usernameInput.value)
    console.log(passwordInput.value)
    if (usernameInput.value === 'billy_pm' && passwordInput.value === '33H2@#') {
        const a = document.querySelector('a')
        a.href = './home.html'
    }
}

