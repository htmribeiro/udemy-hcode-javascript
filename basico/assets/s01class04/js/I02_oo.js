// Aula I02 - Parte 5 - OO

let celular = function () {
    
    this.cor = "prata";

    this.ligar = function() {

        console.log("uma ligação");
        return "Ligando";
        
    }

}
let objeto = new celular();

console.log(objeto.ligar());