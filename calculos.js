/* Desenvolva aqui a rotina */

buscarLocalStorage()

const calcular = document.getElementById('btn_calcular');
calcular.addEventListener('click', calcularValores)

function calcularValores () {
    let num1 = (document.getElementById('valor_base'));
    let num2 = (document.getElementById('valor_transporte'));
    let num3 = (document.getElementById('valor_alimentacao'));
    let receitaTotal = document.getElementById('valor_receita');

    let receitas = (parseFloat(num1.value) + parseFloat(num2.value) + parseFloat(num3.value));
    receitaTotal.value = receitas;

    let num5 = (document.getElementById('valor_automovel'));
    let num6 = (document.getElementById('faltas'));
    let descontoTotal = document.getElementById('valor_descontos');
    
    let descontos = (parseFloat(num5.value) + parseFloat(num6.value));
    descontoTotal.value = descontos;
    
    let valorTotal = (document.getElementById('valor_total'));
    valorTotal.value =  receitas - descontos;
    
    salvarLocalStorage();
};


function salvarLocalStorage(){

    // chave (identificação) - valor
    // vou utilizar o atributo id como chave no localStorage
    // vou utilizar o value como valor a ser armazenado no localstorage

    let listaValores = document.querySelectorAll('input');

    for(let input of listaValores){
        console.log(input);
        
        //setItem -> cria os registros no localStorage
        localStorage.setItem(input.id, input.value);
        
    }
};

function buscarLocalStorage(){

    let listaValores = document.getElementsByTagName('input');

    for(let input of listaValores){

        //getItem
        let valorLocalStorage = localStorage.getItem(input.id);
        input.value = valorLocalStorage;
        
    }
    
};

let listaValores = document.getElementsByTagName('input')
for( let input of listaValores){
    input.addEventListener('change', calcularValores);
};