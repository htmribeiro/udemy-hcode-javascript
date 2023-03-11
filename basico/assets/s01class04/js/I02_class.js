// Aula I02 - Parte 3 - Classes
/* 
// Método estático da classe que mostrar o TimeStamp
let agora = Date.now();

console.log(agora);
// output > 1561213402749
 */
/* 
// Instanciar a classe Date com o usu da palavra reservada new
let agora = new Date();

console.log(agora);
// output > I02_class.js:11 Sat Jun 22 2019 11:18:11 GMT-0300 (Horário Padrão de Brasília)
 */


// Manipulando cada parte da minha data
let agora = new Date();

//console.log(agora.getDate());  // da classe agora, eu quero o dia 
//console.log(agora.getFullYear()); // da classe agora, eu quero o ano
//console.log(agora.getMonth() +1); // da classe agora, eu quero o mês
console.log(agora.toLocaleDateString("pt-BR")); // da classe agora, eu quero a data local