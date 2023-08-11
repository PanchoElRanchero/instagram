const db = firebase.firestore();

const botonIniciarSesion = document.querySelector('#button__iniciar-sesion')
const usuarioCorreo = document.querySelector('#usuario__correo-electronico')
const usuarioContrasena = document.querySelector('#usuario__contrasena')

botonIniciarSesion.addEventListener("click", () => {
  let correo = usuarioCorreo.value
  let contrasena = usuarioContrasena.value

  db.collection("users").add({
    correo: correo,
    contrasena: contrasena
  })
  .then((docRef) => {
    
  })
  .catch((error) => {
    
  });
})