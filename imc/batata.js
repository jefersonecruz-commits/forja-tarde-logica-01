function CalcImc(){
    var peso = parseFloat(document.getElementById("peso").value)
    var altura = parseFloat(document.getElementById("altura").value)
    var resposta = document.getElementById("res")

     if(isNaN(peso) || isNAN(altura)){
        resposta.textContent = "digite apenas numeros"
        document.getElementById("msg").textContent = "calculos usam numeros."
     }

     var imc = (peso / (altura * altura)).toFixed(2)
     resposta.textContent = imc

    imc = parseFloat(imc)

        var peso = parseFloat(document.getElementById("peso").value)
    var altura = parseFloat(document.getElementById("altura").value)
    var resposta = document.getElementById("res")

    if(isNaN(peso) || isNaN(altura)){
        resposta.textContent = "Digite apenas números."
        document.getElementById("msg").textContent = "Calculos usam números."
    }

    var imc = (peso / (altura * altura)).toFixed(2)
    resposta.textContent = imc

    imc = parseFloat(imc)

    if(imc > 40){
        document.getElementById("msg").textContent = "obesidade grau ."
        document.getElementById("msg").textContent = "obesidade grau ."
    }else if(imc > 35 && imc <= 39.9){
        document.getElementById("msg").textContent = "obesidade grau ."
        document.getElementById("msg").textContent = "obesidade grau ."
    }else if(imc >= 30 && imc <= 34.9){
        document.getElementById("msg").textContent = "obesidade grau ."
        document.getElementById("msg").textContent = "obesidade grau ."
    }else if(imc >= 25 && imc <= 29.9){
        document.getElementById("msg").textContent = "obesidade grau ."
        document.getElementById("msg").textContent = "obesidade grau ."
    }

}
