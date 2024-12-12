import { Screen } from "./Screen.js"
import { createAnchorElement } from "../create-elements.js"

// Cuida da navegação entre os arquivos
function handleNavigation() {
    const headerMain = document.querySelector('.header-main')
    const goBackIcon = headerMain.querySelector('img.go-back')
        goBackIcon.addEventListener('click', () => {
            if (Screen.element.dataset.page === 'page1') {
                const a = createAnchorElement('home.html')
                a.click()
                Screen.element.dataset.page = 'page2'
            } else if (Screen.element.dataset.page === 'page2') {
                Screen.element.innerHTML = ''
                Screen.archives.forEach(archive => Screen.element.appendChild(archive.element))
                Screen.element.dataset.page = 'page1'
            }
        })
}

export { handleNavigation  }