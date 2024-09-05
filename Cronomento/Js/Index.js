var secun = 0
var min = 0
var inter
var horas =0

function iniciar(){
  relogio()
   inter = setInterval(relogio,1) 
}
function pause(){
  clearInterval(inter)
}
function zera(){
  clearInterval(inter)
  secun = 0
  min = 0
  document.getElementById('texto').innerText = '00:00:00'
}
function relogio(){
    secun++
    if(secun == 60){
    min++
    secun = 0
       if(min == 60){
       min =0
       horas++
      }
    }
    document.getElementById('texto').innerText =Digi(horas)+':'+Digi(min) +':'+ Digi(secun)
 }
 function Digi(digit){
   if(digit < 10){
    return('0'+digit)
   }else{
    return(digit)
   }

 }