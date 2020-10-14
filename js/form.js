console.log('funcionando!! soy la consola del navegador!!');

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {

  usuario: /^[a-zA-Z0-9\-\_]{4,16}$/ ,
  nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
  contraseña: /^.{4, 30}$/,
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



 
inputs.addEventListener((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blob', validarFormulario);
})



formulario.addEventListener('submit',  (ev) =>  {
  ev.preventDefault()
})
