//exemplo de uso
let peso = 70 // quilograma
let altura= 1.80//metro
let imc= peso/(altura*altura)

{
    if (peso <= 0 || altura <= 0) {
        return "Peso e altura devem ser maiores que zero.";
    }
    let imc = peso / (altura * altura);
    console.log(imc + "seca do 15 ,gordo,seco")
}

  
