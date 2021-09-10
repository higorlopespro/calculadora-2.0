function somar(){
    var tn1 = window.document.getElementById("somarn1")
    var tn2 = window.document.getElementById("somarn2")
    var resultado = window.document.getElementById("resultado")
    if(tn1.value.length == 0 || tn2.value.length == 0){
        window.alert("[Erro] Em alguma das caixas você não digitou nada, verifique e tente novamente!")
    }else{
        var n1 = Number(tn1.value)
        var n2 = Number(tn2.value)
        var soma = n1 + n2
        resultado.innerHTML = ` O resultado foi: <strong>${soma}</strong>`
    }
    
}

function sub(){
    var tn1 = window.document.getElementById("subn1")
    var tn2 = window.document.getElementById("subn2")
    var resultado = window.document.getElementById("resultado")
    if(tn1.value.length == 0 || tn2.value.length == 0){
        window.alert("[Erro] Em alguma das caixas você não digitou nada, verifique e tente novamente!")
    }else{
        var n1 = Number(tn1.value)
        var n2 = Number(tn2.value)
        var soma = n1 - n2
        resultado.innerHTML = ` O resultado foi: <strong>${soma}</strong>`
    }
    
}

function x(){
    var tn1 = window.document.getElementById("xn1")
    var tn2 = window.document.getElementById("xn2")
    var resultado = window.document.getElementById("resultado")
    if(tn1.value.length == 0 || tn2.value.length == 0){
        window.alert("[Erro] Em alguma das caixas você não digitou nada, verifique e tente novamente!")
    }else{
        var n1 = Number(tn1.value)
        var n2 = Number(tn2.value)
        var soma = n1 * n2
        resultado.innerHTML = ` O resultado foi: <strong>${soma}</strong>`
    }
    
}


function div(){
    var tn1 = window.document.getElementById("divn1")
    var tn2 = window.document.getElementById("divn2")
    var resultado = window.document.getElementById("resultado")
    if(tn1.value.length == 0 || tn2.value.length == 0){
        window.alert("[Erro] Em alguma das caixas você não digitou nada, verifique e tente novamente!")
    }else{
        var n1 = Number(tn1.value)
        var n2 = Number(tn2.value)
        var soma = n1 / n2
        resultado.innerHTML = ` O resultado foi: <strong>${soma}</strong>`
    }
    
}