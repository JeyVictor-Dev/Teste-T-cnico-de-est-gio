function pertenceFibonacci(numero) {
    let a = 0
    let b = 1
    let c
  
    while (c < numero) {
      c = a + b;
      a = b;
      b = c;
    }
  
    return c === numero ? 'O número pertence à sequência de Fibonacci.' : 'O número não pertence à sequência de Fibonacci.';

}

  //Exemplo de uso, recebendo o número pelo prompt
  let numeroInformado = parseInt(prompt("Digite um número:"));
  let resultado = pertenceFibonacci(numeroInformado);
   alert(resultado);