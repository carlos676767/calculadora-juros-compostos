

let botao = document.getElementById("botao") // puxei meu id  botao


let totaljuros = document.getElementById("totaljuros") // mostra os juros.

let valorinicial = document.getElementById("valorinicial") // mostra o valor que foi digitado

botao.addEventListener("click", function(){
    let capitalinicial =  parseFloat (document.getElementById("capitalinicial").value) // puxei meu id e peguei oq foi digitado.
    let taxadejuros = parseFloat(document.getElementById("taxadejuros").value) // puxei meu id e peguei oq foi digitado
    let anosdeinvestimentos = parseFloat(document.getElementById("anosdeinvestimentos").value) //puxei meu id e peguei oq foi digitado.

    
   

    if( isNaN(capitalinicial) ||isNaN(taxadejuros)||isNaN(anosdeinvestimentos)||taxadejuros <= 0 || // olhei se nos inputs tem letras ou numeros maiores ou iguais a zero
    anosdeinvestimentos <= 0 || anosdeinvestimentos <= 0){
        totaljuros.innerHTML = "Digite um numero maior que <strong>0</strong> <br> para saber a taxa de juros." // caso tiver ira aparecer a mensagem.
    } else{ // se nao tive faz os calculos abaixo.
        let somar = capitalinicial * Math.pow(1+ taxadejuros/100 ,(anosdeinvestimentos)) // valor inicial vezes a potencia elavada a 1 mais a taxa de juros dividido por 100 numero de anos.
       
        let somar1 = somar - capitalinicial // pega o valor da soma menos o capital inicial para obter a taxa de juros.
        valorinicial.style.color = "#0000FF"
        valorinicial.innerHTML = `${capitalinicial.toFixed(2)}` // mostra na tela para o usuario o valor depositado 

        totaljuros.style.color = "#0000FF"
        totaljuros.innerHTML = ` ${somar.toFixed(2)}` // mostra o valor total do valor com os juros compostos.

        total.style.color = "#0000FF"; // define a cor do total em blue para mostrar
        total.innerHTML =   `${somar1.toFixed(2)}` // mostra apenas o valor de juros 
    }
})



let total = document.getElementById("total") // variavel total que ira mostrar os juros.


limpar.addEventListener("click", function(){ // criei um evento de click que ira somar limpar os campos abaixo.
    let limpar = document.getElementById("limpar") // variavel limpar que estara limpando os campos asbaixo.
    valorinicial.innerHTML = " "
    totaljuros.innerHTML = " "
    total.innerHTML = " "
})



