var filmes = require('./database/catalogo.json')


var cinema = "CineHouse"
var slogan = 'O melhor cinema da região'

// server  Node.JS

// const http = require('http')

// http.createServer((req,res) => {
//    res.writeHead(200,{"Content-text":"text/plain"})
//    switch (req.url) {
//      case "/" :
//          res.end("Você está na pagina home!")
//          break;
//     case "/contato":
//         res.end("Você está na pagina contato")
//         break;
//    }
// res.end("Meu primeiro server")

// }).listen(1232);

const express = require('express');

let app = express();

// Server Express
app.get('/',(req,res)=> res.send("ON!!!!"))

var usuarios = [{id: 1 ,nome: Micael, idade: 17}]
let count = 1;

app.post('/usuarios', (req,res) => {
 const {name,email} = req.body
 count++;
})
app.get('/uauarios/:id', (req,res) => {
    const {id} = req.params
    const usuario = usuarios.find(usuario => usuario.id == id)
})

app.get('/usuarios' ,(req,res) => {
    return res.json(usuarios);
})
app.listen(1232,()=>console.log("O server Esta ON!"))
// console.log(cinema + ' // ' + slogan)

// [
//     {
//         codigo: 1,
//         titulo: 'Luca',
//         duracao: 1.3,
//         atores: ['Kalebe', 'Gioavanna', 'Leonardo'],
//         anoLancamento: 2021,
//         emCartaz: true
//     },
// ]
// [] == arrays
// {} == objeto

// var nomeDeFilmes = ['Luca', 'Moana', 'Mulan', 'Rei Leão', 'Cruella']

// filmes[x].emCartaz = true || false

function adicionarFilme(
    codigo, 
    titulo,
    duracao,
    atores,
    anoLancamento,
    emCartaz) {

    filmes.push(
        {
            codigo: codigo, 
            titulo: titulo,
            duracao: duracao,
            atores: atores,
            anoLancamento: anoLancamento,
            emCartaz: emCartaz
        }
    )
}

// function buscarFilme(codigo) {
//     const filmeEncontrado = filmes.find(filme => filme.codigo == codigo)
//     return filmeEncontrado
// }

// function alterarStatusEmCartaz(codigo) {
//     const filmeEncontrado = filmes.find(filme => filme.codigo == codigo)
//     filmeEncontrado.emCartaz = filmeEncontrado.emCartaz ? false : true 
// }

// // adicionando filmes
// adicionarFilme(2, 'Raya e o Último Dragão', 2, ['Gemma', 'Sandra', 'Alan'], 2021, true)
// adicionarFilme(3, 'Coração de Dragão', 2, ['Gemma', 'Sandra', 'Alan'], 2021, true)

// Lista filmes
// console.log('Lista de filmes')
// console.log('--------------')
// console.log(filmes)



/// buscar filmes
// console.log('Buscar filme')
// console.log('--------------')
// const filmeEncontrado = buscarFilme(3)
// console.log('O filme encontrado foi "' + filmeEncontrado.titulo + '"')

// /// alterar o stats de um filme
// console.log('Alterar filme em cartaz')
// console.log('--------------')
// alterarStatusEmCartaz(3)


// console.log(filmes)
// var titulo = filmes[1].titulo

// console.log(titulo) // string
// console.log(titulo.length) // tamanho da string
// console.log(titulo[5]) // caracter da string
// console.log(titulo.indexOf('Último Leão')) // encontra posição de uma substring dentro 
// let resultado = (titulo.indexOf('Raya') == -1) ? "Não encontrado" : "Encontrado"
//               Condicional   ternario(?)  valor verdadeiro separador(:) valor falso
// if (titulo.indexOf('raya') == -1) 
//     resultado = "Não encontrado"
// else 
//     resultado = "Encontrado"

// console.log(resultado)

// console.log(titulo.slice(9, 15))


// for(let i = 0; i < filmes.length; i++) {
//     console.log(filmes[i].titulo)
// }

// for (const filme of filmes ) {
//     console.log(filme.titulo)
// }

// filmes.forEach(function (filme, index) {
//     console.log(index + ' - ' + filme.titulo)
// })

// function (filme, index)  {
//     console.log(index + ' - ' + filme.titulo)
// }

// (filme, index) => {
//     console.log(index + ' - ' + filme.titulo)
// }

// (filme, index) => console.log(index + ' - ' + filme.titulo)

// filme => console.log(filme.titulo)

// filmes.forEach((filme, index) => console.log(filme.titulo))
// Arrow function

// alterarTitulo = titulo => titulo.toUpperCase()
// function alterarTitulo (titulo) {
//     return titulo.toUpperCase()
// }

// console.log(alterarTitulo(filmes[1].titulo))
function listarTodosOsFilmes() {
    filmes.forEach( (filme, index) => console.log(index + ' - ' + filme.titulo))
    // for(const filme of filmes) {
    //     console.log(filme.titulo)
    // }

    for(let i = 0;i < filmes.length; i++) {
        console.log(filmes[i].titulo)
    }
}

function listarFilmesEmCartaz () {
    const filmesEmCartaz = filmes.filter(filme => filme.emCartaz);
    filmesEmCartaz.forEach(filme => console.log(filme.titulo))
    // for(const filme of filmes) {
    //     if (filme.emCartaz)
    //         console.log(filme.titulo)
    // }
}

function buscarFilme(codigo) {
    const filmeEncontrado = filmes.find(filme => filme.codigo == codigo)
    return filmeEncontrado

    // for (let i = 0; i < filmes.length; i++){
    //     if (filmes[i].codigo == codigo) {
    //         return filmes[i]
    //     }
    // }

    // for(const filme of filmes) {
    //     if (filme.codigo == codigo) {
    //         return filme
    //     }
    // }
}

// function alterarStatusEmCartaz(codigo, buscarFilmeCallback) {
//     const filmeEncontrado = buscarFilmeCallback(codigo)
//     filmeEncontrado.emCartaz = filmeEncontrado.emCartaz ? false : true 
// }



const buscarFilmeJhony = (codigo) => {
  filmes.forEach(function(filme){
    if(filme.codigo == codigo) {
        return filmes
    }
})
} 

//   for(let filme of filmes) {
//         if (filme.codigo == codigo) {
//             return filme
//         }
//     }




// listarFilmesEmCartaz()
// listarTodosOsFilmes()

// let listaDeTitulos = []

// for(let filme of filmes) {
//     listaDeTitulos.push(filme.titulo)
// }

let listaDeTitulos = filmes.map( filme => filme.titulo)
// let listaDeTitulos = filmes.map(function(filme) {
//     return filme.titulo
// })

console.log(listaDeTitulos)


function listaDeFilmesLongo(codigo) {

const filmeEncontrado = filmes.find(filme => filme.codigo == codigo)

if (filmeEncontrado.duracao >= 2.0) {
   return console.log('O filme é longo '+filmeEncontrado.duracao)
} else {
    return console.log('O filme não é longo '+ filmeEncontrado.duracao )
 }
}

listaDeFilmesLongo(2)

