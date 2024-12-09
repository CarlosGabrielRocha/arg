import { newNotification } from "./toast.js"

const inactiveArchives = document.querySelectorAll('.inactive-case')

inactiveArchives.forEach(archive => {
    archive.addEventListener('click', () => {
        newNotification('Acesso Recusado!')
    })
})
