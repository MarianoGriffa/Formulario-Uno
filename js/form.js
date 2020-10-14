console.log('funcionando!! soy la consola del navegador!!');

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {

  usuario: /^[a-zA-Z0-9\-\_]{4,16}$/ ,
  nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
  password: /^.{4, 30}$/,
  correo:  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/
}

const campos  = {
  usuario: false,
  nombre: false,
  password: false,
  correo: false,
  telefono: false
};


const validarFormulario = (ev) => {
    switch(ev.target.name) {
      case 'usuario':
        validarCampo(expresiones.usuario, ev.target, 'usuario');
        break;
        case 'nombre':
          validarCampo(expresiones.nombre, ev.target, 'nombre');
        break;
        case 'password':
          validarCampo(expresiones.password, ev.target, 'password');
        break;
        case 'password2':

          // validarCampo(expresiones.password, ev.target, 'password2');
        break;
        case 'correo':
          validarCampo(expresiones.correo, ev.target, 'correo');
        break;
        case 'telefono':
        validarCampo(expresiones.telefono, ev.target, 'telefono');
        break;
    }
    
}


const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
     document.getElementById(`formulario-${campo}`).classList.remove('formulario-detalle-incorrecto');
     document.getElementById(`formulario-${campo}`).classList.add('formulario-detalle-correcto');
     document.querySelector(`#formulario-${campo} i`).classList.remove('fa-times-circle');
     document.querySelector(`#formulario-${campo} i`).classList.add('fa-check-circle');
     document.querySelector(`#formulario-${campo} .formulario-input-error `).classList.remove('formulario-input-error');
     campos[campo] = true;

  } else {
    document.getElementById(`formulario-${campo}`).classList.add('formulario-detalle-incorrecto');
    document.getElementById(`formulario-${campo}`).classList.remove('formulario-detalle-correcto');
    document.querySelector(`#formulario-${campo} i`).classList.add('fa-times-circle');
    document.querySelector(`#formulario-${campo} i`).classList.remove('fa-check-circle');
    document.querySelector(`#formulario-${campo} .formulario-input-error`).classList.add('formulario-input-error'); 
    campos[campo] = false;
  }
}

 
inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
})



formulario.addEventListener('submit',  (ev) =>  { 
  ev.preventDefault(); 
})
