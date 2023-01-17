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
      alert2('Debe ingresar su edad.','danger' );
    }
    else if(edad>=18){
      alert2('El usuario es mayor de edad.','info' );
    }
    else {
      alert2('El usuario NO es mayor de edad.','warning' );
    }

}
const alert2 = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-sucess alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
  
    alertPlaceholder2.append(wrapper);
}
/* 3. Pedir nombre y edad al usuario,
si se llama Pepita y es mayor de edad permitir ingreso a sala de espera 1,
si se llama Pepita y es menor de edad permitir ingreso a sala de espera 2,
si no se llama Pepita pero es mayor de edad permitir ingreso a sala de espera 3,
sino dirigir a la sala de espera 4. */

const $ejer3Form=document.getElementById("ejercicio3");
const alertPlaceholder3 = document.getElementById('liveAlertPlaceholder3');

$ejer3Form.addEventListener('submit',(e)=>{
    e.preventDefault();
    condicionSala();
});

function condicionSala(){
    const edad=$ejer3Form.edad.value;
    const name=$ejer3Form.name.value;
     
    if(name==="pepita" && edad>=18){
        alert3("Pepita, usted ingrese a la sala de espera 1.", 'info' );
    }else if(name==="Pepita" && edad>=18){
      alert3("Pepita, usted ingrese a la sala de espera 1.", 'info' );
    }else if(name==="pepita" && edad<18){
        alert3("Pepita, usted ingrese a la sala de espera 2.", 'info' );
    }else if(name==="Pepita" && edad<18){
        alert3("Pepita, usted ingrese a la sala de espera 2.", 'info' );
    }else if(name!="pepita" && edad>=18){
        alert3("Usted debe ingresar a la sala de espera 3.", 'info' );
    }else if(name.length==0 || /^\s+$/.test(name)
    || edad.length==0 || /^\s+$/.test(edad)){
      alert3("Debe ingresar los datos", 'danger');
    }else{
        alert3("Usted debe ingresar a la sala de espera 4.", 'info' );
    }
}

const alert3 = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-sucess alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
  
    alertPlaceholder3.append(wrapper);
  };

// 4. Pedir un número y mostrar los números pares desde 1 hasta n.


