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
        alert3("Pepita, usted debe ingresar a la sala de espera 1.", 'info' );
    }else if(name==="Pepita" && edad>=18){
      alert3("Pepita, usted debe ingresar a la sala de espera 1.", 'info' );
    }else if(name==="pepita" && edad<18){
        alert3("Pepita, usted debe ingresar a la sala de espera 2.", 'info' );
    }else if(name==="Pepita" && edad<18){
        alert3("Pepita, usted debe ingresar a la sala de espera 2.", 'info' );
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
const $form = document.getElementById('ejercicio4');

$form.addEventListener('submit', multiplosDeDos);

function multiplosDeDos(event) {
  event.preventDefault();
  const $numero = document.getElementById('numero');
  const numero = $numero.value;

  let pares = '';
  for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
      pares += i + ' ';
    } 
    document.getElementById("liveAlertPlaceholder4").innerHTML = (`Los números pares desde 1 hasta ${numero}, son: ${pares}`); 
  }}
// 5. Pedir un número y mostrar el doble de n.
const $ejercicio5 = document.getElementById('ejercicio5');
const alertPlaceholder5 = document.getElementById('liveAlertPlaceholder5');

  
$ejercicio5.addEventListener('submit', (e) => {
    e.preventDefault();
    doble();
});
    function doble() {
        const numero5 = parseInt($ejercicio5.doble.value);
        const r5 = numero5 * 2;
     
        alert5(`El doble de  ${numero5}  es  ${r5}.`,'info');
};
    
    const alert5 = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
          `<div class="alert alert-${type} alert-dismissible" role="alert">`,
          `   <div>${message}</div>`,
          '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>'
        ].join('')
      
        alertPlaceholder5.append(wrapper)
   
};
// 6. Pedir un número, mostrar el triple de n.
const $ejercicio6 = document.getElementById('ejercicio6');
 const alertPlaceholder6 = document.getElementById('liveAlertPlaceholder6')
 
 $ejercicio6.addEventListener('submit', (e) => {
    e.preventDefault();
    triple();
 });

 function triple() {
    const numero6 =parseInt($ejercicio6.triple.value); 
    const r6 =  numero6 * 3;
    alert6(`El triple de ${numero6} es ${r6}.`, 'info');
 }
 const alert6 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder6.append(wrapper)

};
// 7. Pedir un número, mostrar la mitad de n.
const $ejercicio7 = document.getElementById('ejercicio7');
 const alertPlaceholder7 = document.getElementById('liveAlertPlaceholder7')

 $ejercicio7.addEventListener('submit', (e) => {
    e.preventDefault();
    mitad();

 });


 function mitad() {
    const numero7 = parseInt($ejercicio7.mitad.value);
    const r7 = numero7 / 2;
    alert7(`La mitad de ${numero7} es ${r7}.`, 'info');
 }
 const alert7 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder7.append(wrapper)

};
// 8. Pedir un número, mostrar la tercera parte de n.
const $ejercicio8 = document.getElementById('ejercicio8');
 const alertPlaceholder8 = document.getElementById('liveAlertPlaceholder8')

$ejercicio8.addEventListener('submit', (e) => {
    e.preventDefault();
    terceraParte();

});

 function terceraParte() {
    const numero8 = parseInt($ejercicio8.tercera.value);
    const r8 = numero8 / 3;
    alert8(`La tercera parte de ${numero8} es ${r8}.`, 'info');
 }

 const alert8 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder8.append(wrapper)

};
// 9. Pedir un número, mostrar el cuadrado de n.
const $ejercicio9 = document.getElementById('ejercicio9');
const alertPlaceholder9 = document.getElementById('liveAlertPlaceholder9');

$ejercicio9.addEventListener('submit', (e) => {
e.preventDefault();
elcuadrado();
});

function elcuadrado() {
   const numero9 = parseInt($ejercicio9.cuadrado.value);
   alert9(`El cuadrado de ${numero9} es ${numero9 * numero9}.`, 'info')
 }
 

 const alert9 = (message, type) => {
   const wrapper = document.createElement('div')
   wrapper.innerHTML = [
     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
     `   <div>${message}</div>`,
     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
     '</div>'
   ].join('')
 
   alertPlaceholder9.append(wrapper)

};
// 10. Pedir un número, mostrar n reducido en 5.
const $ejercicio10 = document.getElementById('ejercicio10');
const alertPlaceholder10 = document.getElementById('liveAlertPlaceholder10')

$ejercicio10.addEventListener('submit', (e) => {
    e.preventDefault();
    reducidoEnCinco();

});

function reducidoEnCinco() {
    let numero10 = parseInt($ejercicio10.reducido5.value);
    alert10(`El numero ${numero10} reducido en 5 es ${numero10 - 5}.`, 'info')
 }

 const alert10 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder10.append(wrapper)

};
// 11. Pedir un número, mostrar el doble de n más 4.
const $ejercicio11 = document.getElementById('ejercicio11');
const alertPlaceholder11 =document.getElementById('liveAlertPlaceholder11')

$ejercicio11.addEventListener('submit', (e) => {
    e.preventDefault();
    dobleDeMasCuatro();

});
function dobleDeMasCuatro() {
    const numero11 = parseInt($ejercicio11.doblemas4.value);
    const r11 = numero11 * 2 + 4;
    alert11(`El doble de ${numero11} más 4 es ${r11}.`, 'info');
    
}
 
 const alert11 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder11.append(wrapper)

};
// 12. Pedir un número, mostrar si es positivo, negativo o si es cero.
const $ejercicio12 = document.getElementById('ejercicio12');
const alertPlaceholder12 = document.getElementById('liveAlertPlaceholder12');

$ejercicio12.addEventListener('submit', (e) => {
    e.preventDefault();
    positivoNegativoCero();

});

function positivoNegativoCero() {
    const numero12 = parseInt($ejercicio12.positivonegativo.value);
    if (numero12 === 0) {
        alert12('Usted ingreso un cero', 'dark');
    }else if (numero12 < 0){
        alert12('Usted ingreso un numero negativo', 'warning');
    }else {
        alert12('Usted ingreso un numero positivo', 'info');
    }
}
const alert12 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder12.append(wrapper)

};
// 13 . Pedir un número, mostrar si es par, impar o si es cero.
const $ejercicio13 = document.getElementById('ejercicio13');
const alertPlaceholder13 = document.getElementById('liveAlertPlaceholder13');

$ejercicio13.addEventListener('submit', (e) =>{
    e.preventDefault();
    ceroParImpar();

})

 function ceroParImpar() {
    const numero13 = parseInt($ejercicio13.paroimpar.value);
    if (numero13 === 0) {
        alert13('El numero ' + numero13 + ' es cero', 'dark')
    }else if (numero13 % 2 === 0) {
        alert13('El numero '  +  numero13 +  ' es un numero par', 'info');
    }else{
        alert13('El numero ' + numero13 +  ' es un numero impar', 'warning');
    }
    
  }
  const alert13 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder13.append(wrapper)

};
// 14. Pedir un número, mostrar si es un número primo o no.
const $ejercicio14 =document.getElementById('ejercicio14');
const alertPlaceholder14 = document.getElementById('liveAlertPlaceholder14');

$ejercicio14.addEventListener('submit', (e) => {
    e.preventDefault();
    esPrimo();

})
function esPrimo() {
    const numero14 = parseInt($ejercicio14.numeroprimo.value);
    if (numero14 < 2) {
        alert14(`Debe ingresar un número mayor a 1.`,'danger')
        return
    }
    let contador = 0;
    for (let i = 1; i <= numero14; i++) {
        if (numero14 % i === 0) {
            contador++;
        }
    }
    if (contador === 2) {
        alert14(`El número ${numero14} es primo.`,'info');
    }else{
        alert14(`El número ${numero14}, no es primo.`,'warning');
    }
 }
 
 const alert14 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder14.append(wrapper)

};
// 15. Pedir dos números, mostrar la suma.
const $ejercicio15 = document.getElementById('ejercicio15');
const alertPlaceholder15 = document.getElementById('liveAlertPlaceholder15');

$ejercicio15.addEventListener('submit', (e) => {
    e.preventDefault();
    sumaDeDosNumeros();
})

const sumaDeDosNumeros = ()=> {
    const numero1 = parseInt($ejercicio15.suma.value);
    const numero2 = parseInt($ejercicio15.numero15.value);
    alert15(`La suma es:  ${numero1} + ${numero2} = ${numero1 + numero2}.`, 'info');
}

const alert15 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder15.append(wrapper)

};
// 16. Pedir dos números, mostrar la resta.
const $ejercicio16 = document.getElementById('ejercicio16');
const alertPlaceholder16 = document.getElementById('liveAlertPlaceholder16');

$ejercicio16.addEventListener('submit', (e) => {
    e.preventDefault();
    restaDeDosNumeros();
})

const restaDeDosNumeros = ()=> {
    const numero1 = parseInt($ejercicio16.resta.value);
    const numero2 = parseInt($ejercicio16.numero16.value);
    alert16(`La resta es: ${numero1} - ${numero2} = ${numero1 - numero2}.`, 'dark');
}

const alert16 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder16.append(wrapper)

};
// 17. Pedir dos números, mostrar la multiplicación.
const $ejercicio17 = document.getElementById('ejercicio17');
const alertPlaceholder17 = document.getElementById('liveAlertPlaceholder17');

$ejercicio17.addEventListener('submit', (e) => {
    e.preventDefault();
    multiplica();
})

function multiplica() {
  const numero1 = parseInt($ejercicio17.numero17.value);
  const numero2 = parseInt($ejercicio17.numer17.value);
  alert17(`La multiplicación es  ${numero1} X ${numero2} = ${numero1 * numero2}.`, 'info');
}

function alert17(message, type) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  alertPlaceholder17.append(wrapper);

};
// 18. Pedir dos números, mostrar la división.
const $ejercicio18 = document.getElementById('ejercicio18');
const alertPlaceholder18 = document.getElementById('liveAlertPlaceholder18');

$ejercicio18.addEventListener('submit', (e) => {
    e.preventDefault();
    division();
})

function division() {
  const numero1 = parseInt($ejercicio18.numero18.value);
  const numero2 = parseInt($ejercicio18.numer18.value);
  alert18(`La división es  ${numero1} / ${numero2} = ${numero1 / numero2}.`, 'info');
}

function alert18(message, type) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  alertPlaceholder18.append(wrapper);

};
// 19. Pedir dos números, mostrar el resto de la división.

const $ejercicio19 = document.getElementById('ejercicio19');
const alertPlaceholder19 = document.getElementById('liveAlertPlaceholder19');

$ejercicio19.addEventListener('submit', (e) => {
    e.preventDefault();
    elResiduo();
})

const elResiduo = () => {
    const numero1 = parseInt($ejercicio19.resid1.value);
    const numero2 = parseInt($ejercicio19.resid2.value);
    const resultado = numero1 % numero2;
    alert19(` El resto es ${resultado}.`,'dark')
}

const alert19 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder19.append(wrapper)

};
// 20. Pedir dos números, mostrar si el primer número es divisible por el segundo.
const $ejercicio20 = document.getElementById('ejercicio20');
const alertPlaceholder20 = document.getElementById('liveAlertPlaceholder20');

$ejercicio20.addEventListener('submit', (e) => {
    e.preventDefault();
    Divisible();
})

function Divisible() {
    const numero1 = parseInt($ejercicio20.divisible1.value);
    const numero2 = parseInt($ejercicio20.divisible2.value);
    const resultado = numero1 % numero2;
    if (numero1 === numero1) {
        alert20(`Si es divisible. EL resultado es ${numero1 / numero2}.`,'info');
    } else{
        alert20('no se encontraron resultados.')
    }
}

const alert20 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder20.append(wrapper)

};
// 21. Pedir dos números y el nombre de una operación, mostrar el resultado.
const $ejercicio21 = document.getElementById('ejercicio21');
const alertPlaceholder21 = document.getElementById('liveAlertPlaceholder21');

$ejercicio21.addEventListener('submit', (e) => {
    e.preventDefault();
    
    resultado();
})
const resultado = () => {
    const primernumero = parseInt($ejercicio21.operacion1.value);
    const segundonumero = parseInt($ejercicio21.operacion2.value);
    let operacion = $ejercicio21.operacion3.value ;
    switch (operacion) {
        case 'sumar':
          alert21(`${primernumero} + ${segundonumero} = ${primernumero + segundonumero}`, 'info');
          break;
        case 'restar':
          alert21(`${primernumero} - ${segundonumero} = ${primernumero - segundonumero}`, 'dark');
          break;
        case 'multiplicar':
          alert21(`${primernumero} x ${segundonumero} = ${primernumero * segundonumero}`,'success');
          break;
        case 'dividir':
          alert21(`${primernumero} / ${segundonumero} = ${primernumero/ segundonumero}`, 'warning');
          break;
        default:
          alert21(`La operación "${operacion}" no existe en esta función.`);
          break;
    }
          
}

const alert21 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder21.append(wrapper)

};
// 22. Pedir un número, mostrar la suma total desde 1 hasta n.

const $ejercicio22 =document.getElementById('ejercicio22');
const alertPlaceholder22 = document.getElementById('liveAlertPlaceholder22');

$ejercicio22.addEventListener('submit', (e) => {
    e.preventDefault();
    sumaTotal();
})

function sumaTotal() {
  const numero22 = parseInt($ejercicio22.sumatotal.value);
  let resultado = 0;

  let i = 1;
  while (i <= numero22) {
    resultado += i;
    i++;
  }


  alert22('La suma total es: ' + resultado, 'info');
}


const alert22 = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder22.append(wrapper)

};
// 23.  Pedir un número, mostrar la suma de los números pares desde 1 hasta n.
const $ejercicio23 =document.getElementById('ejercicio23');
  const alertPlaceholder23 = document.getElementById('liveAlertPlaceholder23');

  $ejercicio23.addEventListener('submit', (e) => {
      e.preventDefault();
      sumaPares();
  })

function sumaPares() {
    const numero23 = parseInt($ejercicio23.sumadepares.value);
    let resultado = 0;
    for (let i = 1; i <= numero23; i++) {
        if (i % 2 === 0) {
            resultado = resultado + i;
        }

    }
    alert23('La suma de los pares es '  +  resultado,'info');
}
const alert23 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder23.append(wrapper)

};
// 24.  Pedir un número, mostrar la suma de los números impares desde 1 hasta n.
const $ejercicio24 =document.getElementById('ejercicio24');
  const alertPlaceholder24 = document.getElementById('liveAlertPlaceholder24');

  $ejercicio24.addEventListener('submit', (e) => {
      e.preventDefault();
      sumaImpares();
  })


function sumaImpares() {
    const numero24= parseInt($ejercicio24.sumadeimpar.value);

    let resultado24 = 0;
  
    for (let i = 1; i <= numero24; i++) {
      if (i % 2 !== 0) {
        resultado24 = resultado24 + i;
      }
    }
  
    alert24(`La suma total de los impares es:  ${resultado24}`,'info');
    }


 const alert24 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder24.append(wrapper)

};
// 25. Pedir un número, mostrar multiplos de 3 desde 1 hasta n.
const $ejercicio25 =document.getElementById('ejercicio25');
  const alertPlaceholder25 = document.getElementById('liveAlertPlaceholder25');

  $ejercicio25.addEventListener('submit', (e) => {
      e.preventDefault();
      
      multiplosDe3();
  })
function multiplosDe3() {
    const numero23 = parseInt($ejercicio25.multiplos.value)
  
    let i = 1;
    while (i <= numero23) {
      if (i % 3 === 0) {
      }
      i++;
    }
    alert25(`La respuesta es: ${i}`,'info')
  }
  const alert25 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder25.append(wrapper)

};
  // 26. Pedir un número, mostrar los números desde n hasta 0.
  const $ejercicio26 =document.getElementById('ejercicio26');
  const alertPlaceholder26 = document.getElementById('liveAlertPlaceholder26');

  $ejercicio26.addEventListener('submit', (e) => {
      e.preventDefault();
      desdeNhasta0();
  })
  const desdeNhasta0 = () => {
    const numero26 = parseInt($ejercicio26.numerocero.value);
  
    for (let i = numero26; i > -1; i--) {
      alert26(`${i}`, 'info')
    }
   
  };
  const alert26 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder26.append(wrapper)

};
  