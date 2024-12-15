const form = document.querySelector('.login-form');

form.addEventListener('submit',(event) => {
  event.preventDefault();
  
const {email, password} = form.elements;

  if (email.value.trim() === '' || password.value.trim() === "") {
    alert('All form fields must be filled in');
    return;
  }

const formValue = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

    console.log(formValue);
  form.reset();
});
