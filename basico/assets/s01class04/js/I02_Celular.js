// Aula I02 - Parte 6 - OO (ES6)

class celular{

    constructor(){

        this.cor = "prata";
    }

    ligar(){

        console.log("uma ligação");
        return "Ligando";

    }

}
let objeto = new celular();

console.log(objeto.ligar());