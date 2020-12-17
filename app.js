const work = [
    {
        id: 'moisha',
        name: 'Moisha Bakery',
        img: 'img/moisha-full.png',
        url: 'https://moishabakery.com/',
        plataform: 'Shopify'
    },
    {
        id: 'sheki',
        name: 'Sheki',
        img: 'img/sheki-full.png',
        url: 'https://www.shekionline.com/',
        plataform: 'Wix'
    },
    {
        id: 'middesign',
        name: 'MID Design',
        img: 'img/middesign-full.png',
        url: 'https://middesign.com.ar/',
        plataform: 'Wordpress'
    },
    {
        id: 'aapm',
        name: 'Asociación Argentina Pesca con Mosca',
        img: 'img/aapm-full.png',
        url: '#',
        plataform: 'Wordpress'
    },
    {
        id: 'aapm-training',
        name: 'Asociación Argentina Pesca con Mosca - Training',
        img: 'img/aapm-training-full.png',
        url: '#',
        plataform: 'Wordpress',
    },
    {
        id: 'itechno',
        name: 'Itechno',
        img: 'img/itechno-full.png',
        url: 'http://i-techno.com.ar/',
        plataform: 'Joomla'
    },
    {
        id: 'flycast',
        name: 'Flycast Mode',
        img: 'img/flycast-full.png',
        url: '#',
        plataform: 'Wordpress - DESARROLLO CUSTOM'
    }
]

/*Modal*/
const modal = document.getElementById('modal');
const card = document.querySelectorAll('.card');
const btnCloseModal = document.getElementById('btnClose');

const displayModalDetails = (client) => {
    const modalDetail = document.querySelector('.modal-detail');

    let selectedClient = work.filter(item => {
        return item.id == client
    })

    console.log(selectedClient[0])

    modalDetail.innerHTML =   `
                <h3>${selectedClient[0].name}</h3>
                <p>Plataforma: ${selectedClient[0].plataform}</p>
                <a href="${selectedClient[0].url}" target="_blank">Visit Site <i class="fas fa-external-link-alt"></i></a>
                <img src="${selectedClient[0].img}" alt="">
            `

}

for(i = 0; i < card.length; i++){
    card[i].addEventListener('click', (e) => {
        modal.classList.add('active')

        console.log(e)
        displayModalDetails(e.target.dataset.id)
    })
}

btnCloseModal.addEventListener('click', () => {
    modal.classList.remove('active')
})