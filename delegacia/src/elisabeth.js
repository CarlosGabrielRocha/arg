import { Screen } from "./elisabeth-modules/Screen.js";
import { handleNavigation } from "./elisabeth-modules/handle-navigation.js";

handleNavigation()

Screen.newArchive('opened', '', 'Laudo-315-2024', {type: 'image', src: '../midia/archives/fundo.webp'}, {type: 'image', src: '../midia/archives/fundo.webp'}, {type: 'image', src: '../midia/archives/fundo.webp'})

Screen.newArchive('closed', '1234', 'Archive001', {type: 'image', src: '../midia/archives/fundo.webp'},{type: 'video', src: '../midia/archives/placeholder-video.mp4'})



