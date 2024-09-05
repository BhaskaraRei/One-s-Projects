function LimpaTudo(){
    let x = document.getElementById('x').value = 0;
    let y = document.getElementById('y').value = 0;
    document.getElementById('x1').innerHTML = "0";
}
function soma(){
    let soma = 0;
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;
    soma = parseFloat(x) + parseFloat(y);
    document.getElementById('x1').innerHTML = "Resultado: " + soma;
}
function sub(){
    let subracao = 0;
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;
    subracao = parseFloat(x) - parseFloat(y);
    document.getElementById('x1').innerHTML = "Resultado: " + subracao;
}
function mult(){
    let multiplicacao= 0;
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;
    multiplicacao = parseFloat(x) * parseFloat(y);
    document.getElementById('x1').innerHTML = "Resultado: " + multiplicacao;
}
function divi(){
    let divisao = 0;
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;
    divisao = parseFloat(x) / parseFloat(y);
    document.getElementById('x1').innerHTML = "Resultado: " + divisao;
}