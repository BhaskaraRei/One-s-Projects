var email = document.getElementById('exampleInputEmail1').value;
var senha = document.getElementById('exampleInputPassword1').value;

 const Usuario ={
     email:'wilkenbarroso@gmail.com',
     senha:'wilken123'
};

function checkUsuario(){

     if((Usuario.email && Usuario.senha) == (email && senha)){
      window.alert('Esta cadastrado');
     }else{
        window.alert('Não esta cadastrado');
     }
}
