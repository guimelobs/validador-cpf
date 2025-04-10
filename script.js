function validarCPF() {
    const cpf = document.getElementById('cpfInput').value.replace(/\D/g, '');
    const resultado = document.getElementById('resultado');
  
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
      resultado.textContent = 'CPF inválido.';
      resultado.className = 'mt-4 text-red-600 font-semibold text-lg';
      return;
    }
  
    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
    let dig1 = 11 - (soma % 11);
    dig1 = dig1 > 9 ? 0 : dig1;
  
    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
    let dig2 = 11 - (soma % 11);
    dig2 = dig2 > 9 ? 0 : dig2;
  
    if (parseInt(cpf.charAt(9)) === dig1 && parseInt(cpf.charAt(10)) === dig2) {
      resultado.textContent = 'CPF válido!';
      resultado.className = 'mt-4 text-green-600 font-semibold text-lg';
    } else {
      resultado.textContent = 'CPF inválido.';
      resultado.className = 'mt-4 text-red-600 font-semibold text-lg';
    }
  }
  
