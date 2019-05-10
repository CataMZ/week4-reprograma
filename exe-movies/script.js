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
        data.search.forEach(filme => {
            const filmes = document.getElementById('filmes');
            // parei aqui
            
        })
    })
    .catch((erro) => {
        console.log(erro)
    })
})