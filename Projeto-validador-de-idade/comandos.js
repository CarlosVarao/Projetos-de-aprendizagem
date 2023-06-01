function btnVerificar(){

    // ===== Vareaiveis de funções ====

    const data = new Date();
    const ano = data.getFullYear();
    const inputAno = document.getElementById('anoVerificar');
    const resultado = document.getElementById('res');
    const sexo = document.getElementsByName('bolinha');
    let genero = '';
    const idade = ano - Number(inputAno.value);
    const imgNovo = document.getElementById('homemNovo');
    const imgVelho = document.getElementById('homemVelho');
    const imgNova = document.getElementById('mulherNova');
    const imgVelha = document.getElementById('mulherVelha');

    // ===== Vareaiveis de textos ====

    const erroSemData = "[ERRO] Por favor, preencha o espaço com sua data de nascimento correta !";

    const erroDataSperior = "[ERRO] Por favor, preencha o espaço com a data correta, pois a que você digitou é maior do que o ano atual !!";

    const erroCaracteres = "Digite apenas numeros e não caracteres!!"

    const erroGenero = "[ERRO] Por favor, selecione seu genero !!";

    // ===== Condições ====

    if (inputAno.value.length == '' || inputAno.value < 1900) {
        window.alert(erroSemData);
        return;
    }

    else if (inputAno.value > ano) {
        window.alert(erroDataSperior);
        return;
    }

    else if (isNaN(inputAno.value)) {
        window.alert(erroCaracteres)
        return;
    }

    else {

        if (sexo[0].checked) {
            genero = 'Homem';

            if (idade < 50) {
                imgNovo.style.display = "block";
                imgVelho.style.display = "none";
                imgNova.style.display = "none";
                imgVelha.style.display = "none";
            }

            else {
                imgVelho.style.display = "block";
                imgNovo.style.display = "none";
                imgNova.style.display = "none";
                imgVelha.style.display = "none";
            }
        }

        else if (sexo[1].checked) {
            genero = 'Feminino';

            if (idade < 50) {
                imgNova.style.display = "block";
                imgVelha.style.display = "none";
                imgNovo.style.display = "none";
                imgVelho.style.display = "none";
            }

            else {
                imgVelha.style.display = "block";
                imgNova.style.display = "none";
                imgNovo.style.display = "none";
                imgVelho.style.display = "none";
            }

        }

        else {
            window.alert(erroGenero);
            return;
        }

        resultado.innerHTML = `Detectamos que sua idade é ${idade} e seu sexo é ${genero}!`;
    }
}

const validarFunctionBtnverificar = document.querySelector('.sex')
validarFunctionBtnverificar.addEventListener('submit', (evt) => {
    evt.preventDefault()
    btnVerificar()
})
