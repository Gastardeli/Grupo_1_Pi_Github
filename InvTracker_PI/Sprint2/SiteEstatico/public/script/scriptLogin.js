 document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("modalAviso");
  const texto = document.getElementById("textoAviso");

  function mostrarAviso(mensagem) {
    texto.innerHTML = mensagem;
    modal.style.display = "flex";
  }

  function fecharAviso() {
    modal.style.display = "none";
  }

  window.mostrarAviso = mostrarAviso;
  window.fecharAviso = fecharAviso;
});

var login = "user@email.com";
var senha = 123;


function verificarlogin() {
    var valorSenha1 = password.value
    var valorEmail1 = email.value
    var alerta = '';

    if (valorSenha1 == senha && valorEmail1 == login) {
        window.location.href = "dashboard.html";
    } else {
        alerta += `As seguintes informações estão incorretas: <br>`
        if (senha != valorSenha) {
            alerta += `Senha <br>`
        } if (login != valorEmail) {
            alerta += `Email <br>`
        } alerta += 'Por favor, confira as informações e tente novamente.'

        mostrarAviso(alerta)
    }
}

function cadastro() {
    var valorSenha = password.value;
    var pass = passCheck.value;
    var valorEmail = email.value;
    var SenhaMin = valorSenha.toLowerCase();
    var length = valorSenha.length;
    var senhaFraca = 0;
    var senhaForte = 0;
    var caracterEsp = '!@#$%¨&*()'
    var n = '01234567890';
    var abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var cEspecial = 0;
    var Repeticao = 0;
    var Tamanho = 0;
    var Masc = 0;
    var LetraN = 0;
    var alerta = '';
    var temNumero = 0;
    var temLetra = 0;
    i = 0;

    if (valorSenha == pass) {
        while (i < length) {


            if (valorSenha[i] == valorSenha[i + 1]) {
                senhaFraca++;
                Repeticao--;
            }
            if (caracterEsp.includes(valorSenha[i])) {
                senhaForte++;
                cEspecial++;

            } if (n.includes(valorSenha[i])) {
                temNumero++;
            } if (abc.includes(valorSenha[i])) {
                temLetra++;
            }
            i++;
        }

        if (temNumero > 0 && temLetra > 0) {
            senhaForte++;
            LetraN++;
        }

        if (length < 8) {
            senhaFraca++;
        } else {
            senhaForte++;
            Tamanho++;
        } if (SenhaMin != valorSenha) {
            senhaForte++;
            Masc++;
        } else {
            senhaFraca++;
        }

        if (senhaForte > 3) {
            mostrarAviso(`Informações Registradas com Sucesso!`)
        } else {
            alerta += `Sua senha está fraca! Checar os seguintes campos: <br>`

            if (Repeticao < 0) {
                alerta += `Muita repeticação de Letras <br>`
            } if (cEspecial == 0) {
                alerta += `Sem Caracteres especiais <br>`
            } if (Tamanho == 0) {
                alerta += `Muito curta (- de 8 Caracteres) <br>`
            } if (Masc == 0) {
                alerta += `Letras Maisculas e Minusculas <br>`
            } if (LetraN == 0) {
                alerta += `Apenas números ou letras <br>`
            }

            alerta += `Por favor, corrija esses campos para seguir em frente.`

            mostrarAviso(alerta)
        }
    } else {
        mostrarAviso(`A senha não confirma!`)
    }
}