function soma(){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respsoma")

    resposta.textContent = numero1 + numero2
}function soma(){
    var numero1 = document.getElementById("n3").valueAsNumber
    var numero2 = document.getElementById("n4").valueAsNumber
    var resposta = document.getElementById("respsub")

    resposta.textContent = numero1 - numero2
}function div(){
    var a = parseFloat(document.getElementById("n7").value)
    var b = parseFloat(document.getElementById("n8").value)
    var resp = document.getElementById("respDiv")

    if(b !== 0){
        resp.innerHTML = (a / b).toFixed(2)
    }else(
        resp.innerHTML = "não se divide por 0"
    )
}