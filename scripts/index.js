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


function clickEsquerdo() {
    console.log("esquerda")
}

function clickDireito(){
    console.log("direita")
}

function criarCard(id, contador){
    const cardContainer = document.getElementById('cards-id')
    const cardTemplate = document.createElement('div')
    cardTemplate.classList.add('card')

    cardTemplate.innerHTML = `
    <div id="card-${contador}">
        <img id="img-${contador}" class="imagemCard" src="${dataJson[id].foto}" alt="${dataJson[id].titulo}">
        <div>
            <div id="titulo-${contador}" class="tituloCard"><h3>${dataJson[id].titulo}</h3></div>
            <div id="descricao-${contador}" class="textoCard"><p>${dataJson[id].descricao}</p></div>
        </div>
    </div>`;
    cardContainer.appendChild(cardTemplate);
}

window.onload = function() {
    contador = 0;
    dataJson.forEach(e => {
        contador++;
        if(e.id < 3) criarCard(e.id, contador);
    })
}