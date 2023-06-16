ListaCadastros = []

ListaCadastros = JSON.parse(localStorage.getItem('bdCadastros'))
if (ListaCadastros == null) {
    ListaCadastros = []
}
console.log(ListaCadastros)

function validarUsuario(nome, usuario, senha, conf) {
    if (nome == '' || conf == '' || senha == '' || usuario == '') {
        alert('Verifique os dados antes de cadastrar')
        return true
    } if (senha != conf) {
        alert('Verifique a senha')
        return true
    }else{
        return false
    }
}

function Cadastrar() {
    var nome = document.getElementById('nome').value
    var usuario = document.getElementById('usuario').value
    var senha = document.getElementById('senha').value
    var conf = document.getElementById('confsenha').value

    var possoCadastrar = validarUsuario(nome, usuario, senha, conf)
        if (possoCadastrar == true){
            return
        }

    var Cadastros = {
        nome: nome,
        usuario: usuario,
        senha: senha
    }
    ListaCadastros.push(Cadastros)
    localStorage.setItem('bdCadastros', JSON.stringify(ListaCadastros))

    PagLogin()
}
function PagLogin() {
    location.href = 'Login.html'
}

function Entrar(){
    var usuario =document.getElementById('usuario').value
    var senha =document.getElementById('senha').value
    var encontrou = false
    ListaCadastros.forEach (item => {
        if (usuario == item.usuario && senha == item.senha){
            location.href = 'loja.html'
            encontrou = true
        }
    })
    if(encontrou == false){
        alert('Verifique seu DADOS')
    }
}

function PagLog(){
    location.href = 'Login.html'
}
function Voltar(){
    location.href = 'index.html'
}
function VoltarLog(){
    location.href = 'Login.html'
}