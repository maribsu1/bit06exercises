'use strict';
// 1. Pedir nombre al usuario y saludarlo
const $ejer1Form = document.getElementById('ejercicio1');
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');


$ejer1Form.addEventListener('submit', (e) => {
  e.preventDefault();
  if($ejer1Form.name.value.length==0 || /^\s+$/.test($ejer1Form.name.value) ){
    alert("Debe ingresar su nombre", 'danger');
  }else{
    alert(`Hola, ${$ejer1Form.name.value}!`, 'info');
  }
        
});
const alert = (message, type) => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = [
          `<div class="alert alert-${type} alert-dismissible" role="alert">`,
          `   <div>${message}</div>`,
          '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>',
        ].join('');
      
        alertPlaceholder.append(wrapper);
      };


// 2. Pedir edad al usuario y responder si es o no es mayor de edad.
const $ejer2Form=document.getElementById("ejercicio2");
const alertPlaceholder2 = document.getElementById('liveAlertPlaceholder2');
$ejer2Form.addEventListener('submit',(e)=>{
    e.preventDefault();
    esMayorDeEdad();
    
});

function esMayorDeEdad(){
    const edad=$ejer2Form.edad.value;
    if(edad.length==0 || /^\s+$/.test(edad) ){
      alert1('Debe ingresar su edad.','danger' );
    }
    else if(edad>=18){
      alert1('El usuario es mayor de edad.','info' );
    }
    else {
      alert1('El usuario NO es mayor de edad.','warning' );
    }


}
const alert1 = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-sucess alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
  
    alertPlaceholder2.append(wrapper);
}
