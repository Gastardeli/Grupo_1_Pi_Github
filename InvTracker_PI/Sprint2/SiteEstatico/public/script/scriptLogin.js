var login = "user@email.com"
var senha = 123

function verificarlogin(){
    var valorSenha = password.value
    var valorEmail = email.value
    if(valorSenha == senha && valorEmail == login){
        dashHeader.style.display = 'block'
    }else{
        alert('Ops! parece que há algo errado, tente denovo!')
    }
}