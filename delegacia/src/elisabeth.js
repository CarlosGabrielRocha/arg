import { Screen } from "./elisabeth-modules/Screen.js";
import { handleNavigation } from "./elisabeth-modules/handle-navigation.js";

handleNavigation()

Screen.newArchive('opened', '', 'Laudo-315-2024', {type: 'image', src: '../midia/archives/fundo.webp'}, {type: 'image', src: '../midia/archives/fundo.webp'}, {type: 'image', src: '../midia/archives/fundo.webp'})

Screen.newArchive('closed', '1234', 'Archive001', {type: 'image', src: '../midia/archives/fundo.webp'},{type: 'video', src: '../midia/archives/placeholder-video.mp4'})

Screen.newArchive('closed', '1234', 'Archive002', {type: 'note', src: '', text: 'Encontramos uma câmera que a menina costuma usar para gravar alguns momentos. Infelizmente estava bastante danificada pela água e as gravações corrompidas, conseguimos salvar boa parte mas várias se perderam.'}, {type: 'image', src: '../midia/archives/fundo.webp'})

Screen.newArchive('closed', '1234', 'Archive003', {type: 'note', src: '', text: 'Encontramos uma câmera que a menina costuma usar para gravar alguns momentos. Infelizmente estava bastante danificada pela água e as gravações corrompidas, conseguimos salvar boa parte mas várias se perderam.'}, {type: 'image', src: '../midia/archives/fundo.webp'}, {type: 'download', src: '../midia/archives/laudo_n315-2024.pdf'})




