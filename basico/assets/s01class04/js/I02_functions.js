//Aula I02 - Parte 1 - Tipos de função
/*
// 1. Comum 
function somar(x1, x2){

    return x1 + x2;

}

let resultado = somar(2, 5);

console.log(resultado);
 */
/* 
 //Usaremos a função nativa (eval) Evaluate - valide

function calc(x1, x2, _operador) {

    return eval(`${x1} ${_operador} ${x2}`);

}

let resultado = calc(2, 5, "");

console.log(resultado);
 */
/* 
//2. anônima
(function(x1, x2, _operador) {

    return eval(`${x1} ${_operador} ${x2}`);

})(2, 5, "+");

let resultado = calc(2, 5, "");

console.log(resultado);
 */
//3. Arrow Function
let calc = (x1, x2, _operador) => {
    return eval(`${x1} ${_operador} ${x2}`);
}

let resultado = calc(1, 3, "+");

console.log(resultado);