document.write('<script src="alvo.js"></script>');

// Função 1
const function1 = (input) => {
  if (!/^\d+$/.test(input)) {
    throw new Error('funcaoDobro: Erro! Entrada inválida. Deve ser um número inteiro.');
  } else {
    const number = parseInt(input);
    const result = funcaoDobro(number);
    return `funcaoDobro: Recebido o número inteiro ${input}. O dobro é ${result}.`;
  }
};

// Função 2
const function2 = (input) => {
  const number = parseFloat(input);
  if (isNaN(number)) {
    throw new Error('funcaoRaizQuadrada: Erro! Entrada inválida. Deve ser um número decimal.');
  } else {
    const result = funcaoRaizQuadrada(number);
    return `funcaoRaizQuadrada: Recebido o número decimal ${number}. A raiz quadrada é ${result}.`;
  }
};

// Função 3
const function3 = (input) => {
  if (!/^[a-zA-Z]+$/.test(input)) {
    throw new Error('funcaoCaixaAlta: Erro! Entrada inválida. Deve ser composta apenas por letras.');
  } else {
    const result = funcaoCaixaAlta(input);
    return `funcaoCaixaAlta: Recebida a palavra "${input}". A palavra em maiúsculas é "${result}".`;
  }
};

// Função 4 - ManipNumMat
//const function4 = (input1, input2) => {
//  const number1 = parseFloat(input1);
//  const number1 = parseFloat(input2);
//  if ((isNaN(number1)) || (isNaN(Number2))) {
//    throw new Error('funcaoManipNumMat: Erro! Entrada inválida. Deve ser um número.');
//  } else {
//    const number = parseFloat(input);
//    const result = funcaoManipNumMat(number);
//    return `funcaoManipNumMat: Recebido o número ${input}. A ManipNumMat é ${result}.`;
//  }
//}


const testFunction1 = () => {
  const userInput = prompt('Digite um número inteiro para a Função 1:');
  try {
    const result = function1(userInput);
    document.getElementById('result1').innerHTML = result;
  } catch (error) {
    document.getElementById('result1').innerHTML = 'Erro: ' + error.message;
  }
};

const testFunction2 = () => {
  const userInput = prompt('Digite um número decimal para a Função 2:');
  try {
    const result = function2(userInput);
    document.getElementById('result2').innerHTML = result;
  } catch (error) {
    document.getElementById('result2').innerHTML = 'Erro: ' + error.message;
  }
};

const testFunction3 = () => {
  const userInput = prompt('Digite uma palavra para a Função 3:');
  try {
    const result = function3(userInput);
    document.getElementById('result3').innerHTML = result;
  } catch (error) {
    document.getElementById('result3').innerHTML = 'Erro: ' + error.message;
  }
};

// const testFunction4 = () => {
//  const userInput = prompt('Digite um número para a Função 4:');
//  try {
//    const result = function4(userInput);
//    document.getElementById('result4').innerHTML = result;
//  } catch (error) {
//    document.getElementById('result4').innerHTML = 'Erro: ' + error.message;
//  }
//};



