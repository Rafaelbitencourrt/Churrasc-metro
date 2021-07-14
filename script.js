let inputAdultos = document.querySelector('#adultos');
let inputCriancas = document.querySelector('#criancas');
let inputDuracao = document.querySelector('#duracao');

let resultado= document.querySelector('#resultado');

//console.log(inputAdultos.value, inputCriancas.value, duracao.value);

function calcular(){

    let adultos= inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qtdTotalCarne = carnePP(duracao) * adultos + (criancas * (carnePP(duracao)/2));
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebida = bebidaPP(duracao) * adultos + (criancas * (bebidaPP(duracao)/2));

    resultado.innerHTML = `<p>${qtdTotalCarne/1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} Latas de cervejas</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida/2000)} Pet's de 2L de bebida</p>`
}

function carnePP(duracao){
    if (duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}
function cervejaPP(duracao){
    if (duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}
function bebidaPP(duracao){
    if (duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}