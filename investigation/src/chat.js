import { createElement, createTextElement } from "./create-elements.js";
import { displayEmail, sendEmail } from "./display.email.js";

const emails = document.querySelectorAll('.email')
const sendEmailIcon = document.querySelector('#enviar-email')

const subjectPlaceholder = 'Lorem ipsum dolor'
const p1 = createTextElement('p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum libero nunc, non fermentum eros semper in. Morbi gravida aliquam rhoncus. Proin varius leo eu est ultricies, vitae eleifend tellus laoreet. Sed sem sem, ultricies sed lacus et, porta pellentesque orci. Nulla felis orci, luctus non erat quis, ultrices tincidunt leo.')

const p2 = createTextElement('p', 'Etiam mauris dolor, rhoncus nec sollicitudin ut, eleifend ut erat. Sed eros purus, sollicitudin vitae placerat et, pretium ut nunc. Sed quis mauris id dolor tempor vulputate. Proin sed arcu quis massa ultrices euismod. Suspendisse finibus scelerisque justo at ullamcorper. Vivamus ac massa a dui eleifend facilisis at at tortor. Morbi eget elit sem. Ut maximus consequat efficitur.')

const p3 = createTextElement('p', 'Etiam mauris dolor, rhoncus nec sollicitudin ut, eleifend ut erat. Sed eros purus, sollicitudin vitae placerat et, pretium ut nunc. Sed quis mauris id dolor tempor vulputate. Proin sed arcu quis massa ultrices euismod. Suspendisse finibus scelerisque justo at ullamcorper. Vivamus ac massa a dui eleifend facilisis at at tortor. Morbi eget elit sem. Ut maximus consequat efficitur.')

emails.forEach(email => {
    email.addEventListener('click', () => {
        displayEmail(subjectPlaceholder, [p1, p2, p3], '../midia/camera0.mp4', '../midia/camera1.mp4')
    })
})

sendEmailIcon.addEventListener('click', () => {
    sendEmail(subjectPlaceholder, [p1, p2, p3], '../midia/medico.png', '../midia/medico.png')
})



