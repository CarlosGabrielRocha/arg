import { createButton, createElement, createInput, createLabel, createTextElement } from "../create-elements.js"
import { addBlurBackground, removeBlurBackground } from "../blur.background.js"
import { newNotification } from "../toast.js"

//Tela para o usuário digitar a senha de um arquivo

function tryPassword(password, archive) {
    const passwordContainer = createElement('div', 'password-container', 'password-container')
    const inputBox = createElement('div', '', 'input-box')
    const p = createTextElement('p', 'Arquivo Protegido')
    const label = createLabel('password-input', 'Password')
    const input = createInput('password', 'password-input', 'password-input', ['class', 'password-input'], ['autocomplete', 'off'])
    const button = createButton('Acessar')

    inputBox.append(input, label)
    passwordContainer.append(p, inputBox, button)
    document.body.appendChild(passwordContainer)
    addBlurBackground()

    button.addEventListener('click', () => {
        const typedPassword = input.value
        passwordContainer.remove()
        removeBlurBackground()

        // Se a senha estiver corrreta, retornará true, caso o contrário false.
        if (typedPassword === password) {
            archive.openArchive()
        } else {
            newNotification('Senha incorreta!')
        }      
    })



}

export {tryPassword}
