chkLogin = false;

function verificarlogin() {
    var login = "user@email.com";
    var senha = 'SPtech#2025';
    var valorSenha1 = password.value
    var valorEmail1 = email.value
    var alerta = '';



    if (valorSenha1 == senha && valorEmail1 == login) {
        modal_login.innerHTML = `Bem vindo(a) <br> <span style="color:green">acesso liberado!</span>`
        botaoLogin.innerHTML = `Entrar`;
        chkLogin = true;
    } else {
        alerta += `As seguintes informações estão incorretas <br> <br>`
        if (senha != valorSenha1) {
            alerta += `<span style="color:red">Senha</span> <br>`
        } if (login != valorEmail1) {
            alerta += `<span style="color:red">Email</span> <br>`
        } alerta += '<br> Por favor, confira as informações e tente novamente.'

        botaoLogin.innerHTML = `Voltar`;
        modal_login.innerHTML = alerta;
    }
    modal_login_grande.style.display = "block";
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
             modal_cadastro.innerHTML = `<span style="color:green">Informações Registradas com Sucesso!</span>.`;
        } else {
            alerta += `Sua senha está fraca! Checar os seguintes parâmetros: <br> <br>`

            if (Repeticao < 0) {
                alerta += `Muitas letras <span style="color:red">seguidamente repetidas</span> <br>`
            } if (cEspecial == 0) {
                alerta += `Sem <span style="color:red">caracteres especiais</span> <br>`
            } if (Tamanho == 0) {
                alerta += `Menos de <span style="color:red">8 caracteres</span> <br>`
            } if (Masc == 0) {
                alerta += `Necessario letras <span style="color:red">maisculas e minusculas</span> <br>`
            } if (LetraN == 0) {
                alerta += `Necessario ter <span style="color:red">letras e números</span> <br>`
            }

            alerta += `<br> Por favor, corrija esses requisitos para seguir em frente.`

            modal_cadastro.innerHTML = alerta;
        }
    } else {
         modal_cadastro.innerHTML = `<span style="color:red">A senha não confirma!</span>`;
    }

    modal_cadastro_grande.style.display = "block";
}

function voltar1() {
    modal_cadastro_grande.style.display = "none";
}

function voltar2() {

    if(chkLogin) {
        window.location.href = "dashboard.html";
    }else {
modal_login_grande.style.display = "none";
    }
}