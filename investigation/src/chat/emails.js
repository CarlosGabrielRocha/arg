import { Email } from "./Email.js";
import { Profile } from "./Profile.js";


// Emails Recebidos

try {
    const hacker = new Profile('hacker', '../midia/chat/perfil_hacker.svg')
    hacker.writeEmail('received', 'Por favor, não ignore está mensagem.', ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum libero nunc, non fermentum eros semper in. Morbi gravida aliquam rhoncus. Proin varius leo eu est ultricies, vitae eleifend tellus laoreet.', 'tiam mauris dolor, rhoncus nec sollicitudin ut, eleifend ut erat. Sed eros purus, sollicitudin vitae placerat et, pretium ut nunc. Sed quis mauris id dolor tempor vulputate. Proin sed arcu quis massa ultrices euismod. Suspendisse finibus scelerisque justo at ullamcorper. Vivamus ac massa a dui eleifend facilisis at at tortor.', 'Vivamus ac massa a dui eleifend facilisis at at tortor. Morbi eget elit sem. Ut maximus consequat efficitur.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum libero nunc, non fermentum eros semper in. Morbi gravida aliquam rhoncus. Proin varius leo eu est ultricies, vitae eleifend tellus laoreet.'], '../midia/camera0.mp4', '../midia/camera1.mp4')

    const eyes = new Profile('eyes', '../midia/chat/perfil_eye.svg')
    eyes.writeEmail('received', '👁️', ['Ele não é maravilhoso?'])
} catch(err) {
    console.log(err.message)
}

// Enviar Email

try {
    
} catch(err) {
    console.log(err.message)
}

new Email('sent', 'O que foi isso??', ['Eu acho que aqui não é tão seguro como você disse.. O que era aquela coisa?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum libero nunc, non fermentum eros semper in. Morbi gravida aliquam rhoncus. Proin varius leo eu est ultricies, vitae eleifend tellus laoreet.', 'tiam mauris dolor, rhoncus nec sollicitudin ut, eleifend ut erat. Sed eros purus, sollicitudin vitae placerat et, pretium ut nunc. Sed quis mauris id dolor tempor vulputate. Proin sed arcu quis massa ultrices euismod. Suspendisse finibus scelerisque justo at ullamcorper. Vivamus ac massa a dui eleifend facilisis at at tortor.', 'Vivamus ac massa a dui eleifend facilisis at at tortor. Morbi eget elit sem. Ut maximus consequat efficitur.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum libero nunc, non fermentum eros semper in. Morbi gravida aliquam rhoncus. Proin varius leo eu est ultricies, vitae eleifend tellus laoreet.'], ['../midia/medico.png', '../midia/medico.png', '../midia/medico.png'])







