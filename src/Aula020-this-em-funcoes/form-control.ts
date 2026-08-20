import isEmail from 'validator/lib/isEmail';

const showErrorMessages = 'show-error-message';
const form = document.querySelector('.form') as HTMLFormElement;
const user = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const repeatPassword = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function(event: Event) {
  event.preventDefault();
  hideErrorMessage(this);
  checkForEmptyFields(user, email, password, repeatPassword);
  checkEmail(email);
  checkEqualPasswords(password, repeatPassword);
  if(shouldSenForm(this)) console.log('Formulário Enviado')
});

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value)
      showErrorMessage(input, 'Este campo não pode ficar vazio');
  });
}

function checkEmail(email: HTMLInputElement): void {
  if (!isEmail(email.value)) showErrorMessage(email, 'Email inválido');
}

function checkEqualPasswords(
  password: HTMLInputElement,
  repeatPassword: HTMLInputElement,
): void {
  if (password.value !== repeatPassword.value) {
    showErrorMessage(password, 'Senhas não batem');
    showErrorMessage(repeatPassword, 'Senhas não batem');
  }
}

function hideErrorMessage(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + showErrorMessages)
    .forEach((item) => item.classList.remove(showErrorMessages));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(showErrorMessages);
}

function shouldSenForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.' + showErrorMessages).forEach(() => (send = false));
  return send;
}
