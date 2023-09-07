function isFilled(input, field) {
  if (input.value.trim() == "") {
    alert(`O campo ${field} deve ser preenchido.`);
    input.focus();
    return false
  }
  return true
}

function validateInputs() {
  let nameInput = document.getElementById('name');
  let cpfInput = document.getElementById('cpf');
  let dateInput = document.getElementById('date');
  let emailInput = document.getElementById('email');

  if (!isFilled(nameInput, 'Name')
  || !isFilled(cpfInput, 'CPF')
  || !isFilled(dateInput, 'Date')
  || !isFilled(emailInput, 'E-mail')) {
    return false;
  }

  if (cpfInput.value.length !== 11) return false;
}