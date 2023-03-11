// Aula I02 - Parte 2 - Eventos
 
// Adicionando um evento na janela do navegador, que será acionado quando o navegador estiver em foco
window.addEventListener('focus', event => {
    console.log("focus");
});


// 
document.addEventListener('click', event => {
    console.log("click");
});