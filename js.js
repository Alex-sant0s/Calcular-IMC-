
const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado'); 

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = "";

        if (valorIMC < 18.5){
            classificacao = 'Você está Abaixo Do Peso.';
        } else if (valorIMC < 25) {
            classificacao = 'Com Peso Ideal. Parabéns!!!';
        } else if (valorIMC < 30) {
            classificacao = 'Levemente Acima Do Peso.';
        } else if (valorIMC < 35) {
            classificacao = 'Com Obesidade Grau I';
        } else if (valorIMC <40) {
            classificacao = 'Com Obesidade Grau II';
        } else {
            classificacao = 'Com Obesidade Grau III. Cuidado!!!'
        }

        resultado.textContent = `${nome} Seu IMC È ${valorIMC} e Voce está ${classificacao}`;

    } else {
        resultado.textContent = 'Preencha Todos os campos!'
    }

}



calcular.addEventListener('click', imc);
