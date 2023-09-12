//alert("testando")
class Equipe{
    constructor(nome, titulares){
        this.id = this.gerarId()
        this.nome = nome;
        this.titulares = titulares
        this.reservas = this.calcularReserva();
        this.totalJogadores = this.calcularTotalJogadores();
    }
    gerarId(){
        return Math.floor(Math.random() * 1000);
    }
    calcularReserva(){
        return Math.floor(this.titulares / 2);
    }
    calcularTotalJogadores(){
        return this.titulares + this.reservas
    }
}
class EquipeService{
    constructor(){
        this.equipes = [];
    }
    adicionarEquipe(parametro){
        this.equipes.push(parametro)
    }
    listarEquipes(){
        return this.equipes
    }
    listarEquipesPorId(parametro){
        return this.equipes.find((equipe) => equipe.id == parametro);
    }
    atualizarEquipe(id, nome, titulares){
        const equipe = this.listarEquipesPorId(id);
        equipe.nome = nome;
        equipe.titulares = titulares;
        equipe.reservas = equipe.calcularReserva();
        equipe.totalJogadores = equipe.calcularTotalJogadores
    }
    deletarEquipe(parametro){
        return (this.equipes = this.equipes.filter(
          (equipe) => equipe.id != parametro  
        ));
    }
}
const equipeService = new EquipeService()
function criarEquipe(){
    const nome = document.getElementById("nomeDaEquipe").value;
    const titulares = Number(document.getElementById("quantidade").value);
    const novaEquipe = new Equipe(nome, titulares);
    equipeService.adicionarEquipe(novaEquipe)
    //console.log(equipeService)
    //alert(`equipe: ${nome}, titulares ${titulares}`)
    listarEquipes()
    limparInputs()
}
function listarEquipes(){
const equipes = equipeService.listarEquipes();
const elementoLista = document.getElementById("listarEquipes");
elementoLista.innerHTML = "";
let content = "";

equipes.forEach((equipe) => {
    content += `
    <div onclick="listarEquipesPorId(${equipe.id})">
        <p>Nome: ${equipe.nome}</p>
    </div>
    `
})
elementoLista.innerHTML = content;
//console.log(equipes)
}
function listarEquipesPorId(id){
    const equipe = equipeService.listarEquipesPorId(id);
    const elementoLista = document.getElementById("listarEquipeUnica");
    elementoLista.innerHTML = ""
    let content = `
        <div>
            <p>id: ${equipe.id}</p>
            <p>Nome da equipe: ${equipe.nome}</p>
            <p>Total de jogadores: ${equipe.totalJogadores}</p>
            <p>reserva: ${equipe.reservas}</p>
            <p>titulares: ${equipe.titulares}</p>
            <button onclick="atualizarEquipe(${equipe.id})">Editar</button>
            <button onclick="deletarEquipes(${equipe.id})">excluir</button>
        </div>
    `
    elementoLista.innerHTML = content
}
let aux = null
function atualizarEquipe(id){
    const equipe = equipeService.listarEquipesPorId(id);
    document.getElementById("nomeDaEquipe").value = equipe.nome;
    document.getElementById("quantidade").value = equipe.titulares;
    document.getElementById("botaoCadastrar").classList.add("hidden");
    document.getElementById("botaoEditar").classList.remove("hidden");
    aux = id
}
function editarEquipe(id){
    const equipe = equipeService.listarEquipesPorId(id);
   const nome = document.getElementById("nomeDaEquipe").value;
    const titulares = document.getElementById("quantidade").value;
    equipeService.atualizarEquipe(aux, nome, titulares);
    listarEquipes();
    document.getElementById("botaoCadastrar").classList.remove("hidden");
    document.getElementById("botaoEditar").classList.add("hidden");
    aux = id
}
function limparInputs(){
    document.getElementById("nomeDaEquipe").value = ""
    document.getElementById("quantidade").value = "";
}
function deletarEquipes(id){
    equipeService.deletarEquipe(id)
    listarEquipes();
    document.getElementById("listarEquipeUnica").classList.add("hidden");
}