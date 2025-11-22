// Desconto em compra
// Regra de negócio:
// Se valorCompra >= 100 -> 10%
// Se valorCompra < 100 -> sem desconto
// Cria uma função que executa isso

let escopoGlobal = 10 //escopo global
function validaDesconto(valorCompra) {
    let desconto = 0 //escopo de função
    
    if (valorCompra >= 100) {
        desconto = valorCompra * 0.10 
    }
    
    valorFinal = valorCompra - desconto  

    return {
        valorCompra,
        desconto,
        valorFinal
    }

}
console.log(validaDesconto(1200));


