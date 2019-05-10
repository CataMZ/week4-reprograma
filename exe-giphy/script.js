// url = https://api.giphy.com/v1/
// endpoint = search
// TEXTO = valor do input 
// CHAVE = api_key

// https://api.giphy.com/v1/stickers/search?q=TEXTO&api_key=CHAVE

const sticker = document.getElementById('sticker');
const botao = document.getElementById('botao');

botao.addEventListener('click', (evento) => {
    evento.preventDefault();
    // console.log("clicando")
    let stickerValue = sticker.value

    fetch(`https://api.giphy.com/v1/stickers/search?q=${stickerValue}&api_key=T9z6txxH1OUQe0l8kzPCzI6hoUIa6jlF
    `)
    .then((response) =>{
        return response.json();
    })
    .then((retorno) =>{
        // console.log(retorno)
        figurinha.innerHTML = ""
        retorno.data.forEach(figura => { 
            // data é o array deles
            const figurinha = document.getElementById('figurinha');
            const img = document.createElement('img');
            img.setAttribute('src', figura.images.original.url);
            figurinha.appendChild(img);
            // console.log(figura.images.fixed_width.url)
        })
    })
    .catch((erro) => {
        console.log(erro)
    })
})