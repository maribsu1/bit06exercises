'use strict';
const $form = document.getElementById('form');
const $legend = document.getElementsByTagName('legend')[0];
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

const formulario = {
  username: null,
  password: null,
};

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

function checkFormulario() {
  if (formulario.username && formulario.password)
    return true;
  else return false;
}

function checkPermitido(obj) {
  try {
    const permitido = {
      username: 'mari',
      password: 1212,
      accept: true,
    };
    if (
      obj.username === permitido.username &&
      parseInt(obj.password) === permitido.password 
    ) {
      window.open('docs\ejercicios.html', '_self');
    } else {
      alert(
        'Intenta nuevamente!',
        'warning'
      );
    }
  } catch (error) {
    console.log('se produjo un error en la función checkPermitido:', error);
  }
}

$form.username.addEventListener('input', (e) => {
  formulario.username = e.target.value;
});

$form.password.addEventListener('input', (e) => {
  formulario.password = e.target.value;
});

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (checkFormulario() === true) {
    checkPermitido(formulario);
  } else {
    $legend.classList.add('text-danger');
    alert('Todos los campos son obligatorios.', 'danger');
  }
});
