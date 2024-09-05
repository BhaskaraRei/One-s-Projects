
function chageGb(){
   return '#' + Math.floor(Math.random() * 16777215).toString(16)
}
setInterval(function(){
 document.body.style.backgroundColor = chageGb();
},1000);