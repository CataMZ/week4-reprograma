// http://www.omdbapi.com/?s=TEXTO&apikey=CHAVE

const filme = document.getElementById('movie');
const botao = document.getElementById('botao');

botao.addEventListener('click', (evento) => {
    evento.preventDefault();
    // console.log("clicando")
    let filmeValue = movie.value
    
    fetch(`http://www.omdbapi.com/?s=${filmeValue}&apikey=e1c46ed3`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data)
        filmes.innerHTML = ""
        data.Search.forEach(filme => {
            const filmes = document.getElementById('filmes'); // tentar descobrir pq o innerHTML não funcionou com class
            
            const card = document.createElement('div');
            card.setAttribute('class', 'box');
            
            const img = document.createElement('img');
            img.setAttribute('src', filme.Poster);
            
            const descricao = document.createElement('div');
            descricao.setAttribute('class', 'box-divider');
            
            const titulo = document.createElement('p');
            
            const nomeFilme = document.createElement('span');
            nomeFilme.textContent = filme.Title + ' ' + '(' + filme.Year + ')';

            const tipo = document.createElement('p');
            tipo.textContent = filme.Type;
            
            filmes.appendChild(card);
            card.appendChild(img);
            card.appendChild(descricao);
            descricao.appendChild(titulo);
            titulo.appendChild(nomeFilme);
            descricao.appendChild(tipo);
        })
    })
    .catch((erro) => {
        console.log(erro)
    })
})