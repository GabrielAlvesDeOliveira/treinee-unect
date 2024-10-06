var dataJson = [
    {
        "id": 0,
        "foto": "/img/brigadeiro.png",
        "titulo": "Brigadeiro de capuccino",
        "descricao": "O brigadeiro de cappuccino é uma das guloseimas que enfeitam o balcão da doceria..."
    },
    {
        "id": 1,
        "foto": "/img/pao-de-mel.png",
        "titulo": "Pão de Mel",
        "descricao": "O brigadeiro de capuccino combina o doce tradicional com um toque suave..."
    },
    {
        "id": 2,
        "foto": "/img/bolo.png",
        "titulo": "Bolo de chocolate",
        "descricao": "O bolo de chocolate é uma das sobremesas mais pedidas da Cafeteira, ele possui um recheio com..."
    },
    {
        "id": 3,
        "foto": "/img/sorvete.png",
        "titulo": "Sorvete de Café",
        "descricao": "O sorvete em versão de café pode ser aproveitado sozinho ou com um pedacinho de bolo no fim..."
    }
]
var minId = 0
var maxId = 2
var carrossel = []
// window.addEventListener("resize", function(){
//     
// })

function clickEsquerdo() {
    deleteCards()
    carrossel = carrossel.map(e => +e-1 <= -1 ? 3 : +e-1)
    carrossel.map(i => {dataJson.forEach(e => {e.id == i ? criarCard(i) : undefined})}) 
}

function clickDireito(){
    deleteCards()
    carrossel = carrossel.map(e => +e+1 >= 4 ? 0 : +e+1)
    carrossel.map(i => {dataJson.forEach(e => {e.id == i ? criarCard(i) : undefined})})  
}

function deleteCards(){
    const cardContainer = document.getElementById("cards-id")
    if (carrossel.length > 0) carrossel = []
    for(child of cardContainer.children){ carrossel.push((child.id).match(/\d/g).join(""))}
    cardContainer.replaceChildren("")
}

function criarCard(id){
    const cardContainer = document.getElementById('cards-id')
    const cardTemplate = document.createElement('div')
    cardTemplate.classList.add('card')
    cardTemplate.id = `card-${id}`
    cardTemplate.innerHTML = `
        <img id="img-${id}" class="imagemCard" src="${dataJson[id].foto}" alt="${dataJson[id].titulo}">
        <div>
            <div id="titulo-${id}" class="tituloCard"><h3>${dataJson[id].titulo}</h3></div>
            <div id="descricao-${id}" class="textoCard"><p>${dataJson[id].descricao}</p></div>
        </div>
    `;
    cardContainer.appendChild(cardTemplate);
}

window.onload = function() {
    dataJson.forEach(e => {
        if(e.id >= minId && e.id <= maxId) criarCard(e.id);
    })
}