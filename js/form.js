
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
  usuario: /^[a-zA-Z0-9\-\_]{4,16}$/ ,
  nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
  password: /^.{4,20}$/,
  correo:  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/
};

const campos  = {
  usuario: false,
  nombre: false,
  password: false,
  correo: false,
  telefono: false
};


const validarFormulario = (ev) => {
    switch(ev.target.name) {
      case "usuario":
        validarCampo(expresiones.usuario, ev.target, "usuario");
        break;
        case "nombre":
          validarCampo(expresiones.nombre, ev.target, "nombre");
        break;
        case "password":
          validarCampo(expresiones.password, ev.target, "password");
          validarPass2();
        break;
        case "password2":
          validarPass2();
        break;
        case "correo":
          validarCampo(expresiones.correo, ev.target, "correo");
        break;
        case "telefono":
        validarCampo(expresiones.telefono, ev.target, "telefono");
        break;
    }
    
}


const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
     document.getElementById(`formulario-${campo}`).classList.remove('formulario-detalle-incorrecto');
     document.getElementById(`formulario-${campo}`).classList.add('formulario-detalle-correcto');
     document.querySelector(`#formulario-${campo} i`).classList.add('fa-check-circle');
     document.querySelector(`#formulario-${campo} i`).classList.remove('fa-times-circle');
     document.querySelector(`#formulario-${campo} .formulario-input-error`).classList.remove('formulario-input-error-activo');
     campos[campo] = true;

  } else {
    document.getElementById(`formulario-${campo}`).classList.add('formulario-detalle-incorrecto');
    document.getElementById(`formulario-${campo}`).classList.remove('formulario-detalle-correcto');
    document.querySelector(`#formulario-${campo} i`).classList.add('fa-times-circle');
    document.querySelector(`#formulario-${campo} i`).classList.remove('fa-check-circle');
    document.querySelector(`#formulario-${campo} .formulario-input-error`).classList.add('formulario-input-error-activo'); 
    campos[campo] = false;
  }
}

 const validarPass2 = () => {
  const pass1 = document.getElementById("password");
  const pass2 = document.getElementById("password2");

  if (pass1.value  !==  pass2.value)  {
    document.getElementById(`formulario-password2`).classList.add('formulario-detalle-incorrecto');
    document.getElementById(`formulario-password2`).classList.remove('formulario-detalle-correcto');
    document.querySelector(`#formulario-password2 i`).classList.add('fa-times-circle');
    document.querySelector(`#formulario-password2 i`).classList.remove('fa-check-circle');
    document.querySelector(`#formulario-password2 .formulario-input-error`).classList.add('formulario-input-error-activo'); 
    campos['password'] = false;
  } else {
     document.getElementById(`formulario-password2`).classList.remove('formulario-detalle-incorrecto');
     document.getElementById(`formulario-password2`).classList.add('formulario-detalle-correcto');
     document.querySelector(`#formulario-password2 i`).classList.remove('fa-times-circle');
     document.querySelector(`#formulario-password2 i`).classList.add('fa-check-circle');
     document.querySelector(`#formulario-password2 .formulario-input-error`).classList.remove('formulario-input-error-activo');
     campos['password'] = true;
   }
 
  }

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
})



formulario.addEventListener('submit',  (ev) =>  { 
  ev.preventDefault(); 

  const terminos = document.getElementById('terminos');
   

  if (campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked) {
      formulario.reset();
    document.getElementById('formulario-mensaje-exito').classList.add('formulario-mensaje-exito-activo');
    
    setTimeout( () => {
      document.getElementById('formulario-mensaje-exito').classList.remove('formulario-mensaje-exito-activo');
    }, 5000);  

     document.getElementById('formulario-mensaje').classList.remove('formulario-mensaje-activo');
     
     document.querySelectorAll('.formulario-detalle-correcto').forEach((icono) => {
      icono.classList.remove('formulario-detalle-correcto');
  })

  } else {
    
    document.getElementById('formulario-mensaje').classList.add('formulario-mensaje-activo');

  }
})
