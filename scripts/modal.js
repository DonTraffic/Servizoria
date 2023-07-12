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

        let link = ''
        inputs.forEach( (input) => {
            link = `${link}&fields[${input.getAttribute('name')}]=${input.value}`
        })

        fetch(`https://servizoria.bitrix24.ru/rest/835/dlbzb506kph50iby/crm.lead.add.json?fields[TITLE]=Новый лид Сервизория${link}&fields[SOURCE_ID]=Заявка с сайта`, {
            method: 'POST',
        }).then(response => {
            if (response.ok) {
                console.log('Данные успешно отправлены!');
                return response.json();
            } else {
                throw new Error('Произошла ошибка при отправке данных.');
            }
        })
        
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

document.querySelectorAll('.modal__form-input-phone').forEach( input => {
    input.addEventListener('input', e => {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
})

// document.querySelectorAll('.modal__form-input-phone').forEach( input => {
//     input.addEventListener('input', e => {
//         let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
//         e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
//     });
// })
