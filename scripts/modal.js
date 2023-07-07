function openModal(name) {
    let modal = document.querySelector(`#modal-${name}`)
    let form = modal.querySelector('.modal__form')

    modal.style.display = 'flex'

    form.addEventListener('click', (event) => {
        event.stopPropagation()
    })

    modal.addEventListener('click', () => { closeModal(name) })
}

function closeModal(name) {
    document.querySelector(`#modal-${name}`).style.display = 'none'
}

function formSubmit(name, func) {
    let modal = document.querySelector(`#modal-${name}`)

    let inputs = modal.querySelectorAll('.modal__form-input')
    let status = true

    inputs.forEach((input) => {
        input.style.border = '1px solid #7429BF'

        if (!input.value) {
            input.style.border = '1px solid #ba2323'
            status = false
        } 
    })

    if (status) {
        openModal('complite')
        closeModal(name)
        setTimeout(() => { closeModal('complite') }, 2000)
        
        switch (func) {
            case 'donwload':
                window.location.href = './assets/download/Downloads.7z';
                break;
    
        }

    }

}
