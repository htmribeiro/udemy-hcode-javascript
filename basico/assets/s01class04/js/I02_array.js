// Aula I02 - Parte 4 - Array
 
// let carros = ["palio 98", "toro", "uno", 10, true, new Date(), function(){}];
/*
console.log(carros);
 */
/* 
// para saber a quantidade que tem dentro desse array
console.log(carros.length);
 */
/* 
// e se eu quiser o primeiro item do meu array
console.log(carros[0]);
 */
/* 
// pegando o dia ou o mês a partir da data dentro do meu array
console.log(carros[5].getFullYear());
 */
/* 
// posso invocar a função de dentro do meu array
console.log(carros[6]());
 */
/* 
 // Laço para percorrer a minha array
 carros.forEach(function(value, index){
     
     console.log(index, value);
 });
 */

// Exercício de Array
let montadora = ["Fiat", "Nissan", "Chevrolet", "Toyota", "Hyundai"];

montadora.forEach(function (value, index) {
    
    console.log(index, value)
    
});
