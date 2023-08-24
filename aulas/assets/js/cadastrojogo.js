//Primeira coisa que eu vou verificar  se meu js esta linkado no meu html

function verificarInputs(){
    console.log("linkado?");
let titulo = document.getElementById("input-titulo").value
let preco = document.getElementById("input-preço").value
let descricao = document.getElementById("input-descrição").value
let plataforma = document.getElementById("input-plataforma").value
let imgLink = document.getElementById("input-link").value



if(titulo == '' || preco == '' || descricao == '' || plataforma == '' || imgLink == ''){
    
    return true;
}else{
    console.log("os dados não estão em branco")
    return false
}
}

function envieMsg(msg, tipos){


let msgDiv = document.getElementById("msg");
msgDiv.innerHTML = "";

const msgParaTela = `
    <p class='${tipos}'>${msg}</p>
`
msgDiv.innerHTML += msgParaTela;

setTimeout(function(){
    msgDiv.innerHTML = ""
}, 3000)
}
class Jogo{
    constructor(titulo, preco, descricao, plataforma, imgLink){
        this.titulo = titulo;
        this.preco = preco;
        this.descricao = descricao;
        this.plataforma = plataforma;
        this.imgLink = imgLink;
        
    }
}
const jogo = new Jogo("teste", "12", "desc", "eu", "img");


function comporJogo(){
let titulo = document.getElementById("input-titulo").value
let preco = document.getElementById("input-preço").value
let descricao = document.getElementById("input-descrição").value
let plataforma = document.getElementById("input-plataforma").value
let imgLink = document.getElementById("input-link").value

const jogo = new  Jogo(titulo,preco,descricao,plataforma,imgLink,)

bibliotecaJogos.add(jogo)

}

class ListaJogos{
    constructor(){
        this.listaJogosArray = [];
    }
    add(jogo){
        this.listaJogosArray.push(jogo);
        if(verificarInputs()){
            envieMsg("preencha todos os campos", "erro")
        }else{
            this.listaJogosArray.push(jogo)
            envieMsg("Cadastrado com sucesso", "sucesso")
            limparInputs()
        }
    }
}

const bibliotecaJogos = new ListaJogos();
console.log(bibliotecaJogos)

function limparInputs(){
    console.log("usei a função limparInputs")
 titulo = document.getElementById("input-titulo").value = ""
 preco = document.getElementById("input-preço").value = ""
 descricao = document.getElementById("input-descrição").value = ""
 plataforma = document.getElementById("input-plataforma").value = ""
 imgLink = document.getElementById("input-link").value = ""
}