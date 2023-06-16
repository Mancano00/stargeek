function CadastrarFilme(){
    document.body.innerHTML += 
    `<div class = 'DivPrin' id= 'DivPrin'>
        <div class = 'Midia'>
        <div class = 'x'><button onclick='fechar()'><span class="material-symbols-outlined">
        close</span></button>
        </div>
        <h2>Cadastre seus Filmes Preferidos</h2>
            <div class = 'nomelink'>
                <p id= 'resultado'></p>
                <input id="NomeFilme" type="text" placeholder="Digite o nome do filme">
                <input id="LinkFilme" type="text" placeholder="Digite o link do filme"><br>
                <button onclick="filme()" class="botaoE" >Exibir filmes</button>
                <button onclick="Limpar()" class="botaoE" >Limpar filmes</button><br>
            </div>
        </div>
    </div>` 

    exibirFilme()
}

var ListaFilmes = []

ListaFilmes = JSON.parse(localStorage.getItem('bdFilmes'))
if (ListaFilmes == null){
    ListaFilmes = []
}

exibirFilme()

console.log(ListaFilmes)

function exibirFilme(){
    document.getElementById('img').innerHTML = ``
    for (var i in ListaFilmes){

        document.getElementById('img').innerHTML += `<div class= 'filme'><b>${ListaFilmes[i].nome}</b><br>
        <img class= 'img' src="${ListaFilmes[i].link}"><div>`
    }
}

function validarCadastro(NomeFilme, LinkFilme){
    if (NomeFilme != '' && LinkFilme != ''){
        return true
    } else{
        return false
    }
}
function filme(){
    var NomeFilme = document.getElementById('NomeFilme').value
    var LinkFilme = document.getElementById('LinkFilme').value

    var possoCadastrar = validarCadastro(NomeFilme, LinkFilme)
    if (possoCadastrar == false){
    alert ('Verifique os dados antes de cadastrar')
    return
    }

    var Filme = {
        nome: NomeFilme,
        link: LinkFilme
    }
    ListaFilmes.push(Filme)
    localStorage.setItem('bdFilmes', JSON.stringify(ListaFilmes) )

    exibirFilme()

    document.getElementById('NomeFilme').value = ``
    document.getElementById('NomeFilme').focus()
    document.getElementById('LinkFilme').value = ``
}

function fechar(){
    document.getElementById('DivPrin').remove()
}

function Limpar(){
    ListaFilmes = []
    localStorage.setItem('bdFilmes', JSON.stringify(ListaFilmes) )
    exibirFilme()
    document.getElementById('resultado').innerHTML = ``
}
function CadastrarF(){
    location.href = 'Midia.html'
}
