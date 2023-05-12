const data = {
    'SERVICE DESIGN И DESIGN THINKING': {
        0: {
            text: 'Определение персон',
            link: '#'
        },
        1: {
            text: 'Карта клиентского пути (CJM)и Jobs-to-be-Done',
            link: '#'
        },
        2: {
            text: 'Сбор и приоритезация идей',
            link: '#'
        },
        3: {
            text: 'Прототипирование',
            link: '#'
        },
        4: {
            text: 'Определение персон',
            link: '#'
        },
    },
    'Качественные исследования': {
        0: {
            text: 'Глубинные интервью (in-depth interview)',
            link: '#'
        },
        1: {
            text: 'Этнография',
            link: '#'
        },
        2: {
            text: 'Фокус-группы',
            link: '#'
        },
        3: {
            text: 'Наблюдения',
            link: '#'
        },
        4: {
            text: 'Accompanied Checking',
            link: '#'
        },
        5: {
            text: 'Фасилитационные сессии',
            link: '#'
        },
    },
    'Тайный покупатель': {
        0: {
            text: 'Программа менеджмента сервиса "Тайный покупатель"',
            link: '#'
        },
        1: {
            text: 'Конкурентный Mystery Shopping',
            link: '#'
        },
        2: {
            text: 'Мотивационный Mystery Shopping',
            link: '#'
        },
        3: {
            text: 'Тайный соискатель',
            link: '#'
        },
    },
    'КАБИНЕТНЫЕ ИССЛЕДОВАНИЯ': {
        0: {
            text: 'Анализ вторичной информации из открытых источников',
            link: '#'
        },
        1: {
            text: 'Web Social Media мониторинг',
            link: '#'
        },
        2: {
            text: 'Мониторинг медиа',
            link: '#'
        },
    },
    'АУДИТЫ': {
        0: {
            text: 'Открытый аудит',
            link: '#'
        },
        1: {
            text: 'Закрытый аудит',
            link: '#'
        },
        2: {
            text: 'Ревизии',
            link: '#'
        },
        3: {
            text: 'Инвентаризация',
            link: '#'
        },
        4: {
            text: 'Мониторинг цен в сети Интернет',
            link: '#'
        },
        5: {
            text: 'Мониторинг цен в рознице',
            link: '#'
        },
    },
    'ТРЕКИНГ И АНАЛИТИКА HR-ИНДЕКСОВ': {
        0: {
            text: 'ENPS – Индекс удовлетворенности и вовлеченности персонала ',
            link: '#'
        },
        1: {
            text: 'EJM – Карта пути соискателя ',
            link: '#'
        },
        2: {
            text: 'Эмоциональная компетентность и ментальное здоровье сотрудников',
            link: '#'
        },
    },
    'Трекинг И АНАЛИТИКА CX-индексов': {
        0: {
            text: 'CSI – Индекс удовлетворенности потребителей',
            link: '#'
        },
        1: {
            text: 'CES – Индекс усилий клиента ',
            link: '#'
        },
        2: {
            text: 'NPS – Индекс потребительской лояльности ',
            link: '#'
        },
        3: {
            text: 'PAS – Индекс персонализации сервиса',
            link: '#'
        },
    },
    'Колличественные исследования': {
        0: {
            text: 'Опросы «face to face»',
            link: '#'
        },
        1: {
            text: 'Опросы телефонные',
            link: '#'
        },
        2: {
            text: 'Опросы онлайн',
            link: '#'
        },
        3: {
            text: 'Валидация аудио-, фото-, видеоконтента',
            link: '#'
        },
    },
}

function printHTML(search) {
    let template = ``

    function createItems(items) {
        let result = ''

        for (const key in items) {

            let textComplite 
            if (search) {
                let text = items[key].text
                let value = search.toLowerCase()
                let index = text.toLowerCase().indexOf(value)

                if (index >= 0) textComplite = `
                    ${text.substr(0, index)}<b>${text.substr(index, value.length)}</b>${text.substr(index + value.length)}
                `
            }

            result += `
                <li class="section-tools__item-list-item search-item">
                    <a href='${items[key].link}'>${textComplite ? textComplite : items[key].text}</a>
                </li>
            `            
        }

        return result

    }

    for (const key in data) {
        let elem = `
            <div class="section-tools__item">
                <h3 class="section-tools__item-title search-item">${key}</h3>
                <ul class="section-tools__item-list">
                    ${createItems(data[key])}
                </ul>
            </div>
        `

        template += elem
        
    }
    
    document.querySelector('.section-tools__items').innerHTML = template

}
printHTML()

document.querySelector('#search-input').addEventListener('input', e => {
    printHTML(e.target.value)
})
document.querySelector('#search-clear').addEventListener( 'click', () => {
    document.querySelector('#search-input').value = ''
    printHTML()
})