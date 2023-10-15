const usernameE1 = document.querySelector("#username");
const emailE1 = document.querySelector("#email");
const passwordE1 = document.querySelector("#password");
const confirmPasswordE1 = document.querySelector("#confirm-password");
const form = document.querySelector("#signup");



const isRequired = (value) => (value === " " ? false : true);
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

/** función para mostrar el error
 * Esta funcion colorea el borde del input y muestra un mensaje de error en el campo small
 * si el input es invalido
 * parametros input y mensaje
 * **/

const showError = (input, message) => {
  //cogemos al padre del elemento input//
  const formField = input.parentElement;

  //Añadimos la clase error//
  formField.classList.remove("succes");
  formField.classList.add("error");

  // mostramos el mensaje de error

  const error = formField.querySelector("small");
  error.textContent = message;
};

//funcion que muestra el suceso

const showSuccess = (input) => {
  //cogemos el elemento del form//
  const formField = input.parentElement;

  //borramos la clase de error
  formField.classList.remove("error");
  formField.classList.add("succes");

  //escondemos el mensaje de error//

  const error = formField.querySelector("small");
  error.textContent = "";
};
const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const username = usernameE1.value.trim();

    if (!isRequired(username)) {
        showError(usernameE1, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameE1, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(usernameE1);
        valid = true;
    }
    return valid;
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isUsernameValid = checkUsername();
  let isFormvalid = isUsernameValid;
  if (isFormvalid) {
  }
});