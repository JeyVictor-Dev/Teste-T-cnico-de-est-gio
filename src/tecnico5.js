function inverterString(str) {
    let novaString = '';
  
    for (let i = str.length - 1; i >= 0; i--) {
      novaString += str[i];
    }
  
    return novaString;
  }
  
  //Exemplo de uso, definindo a string
  const minhaString = "Hello, World!";
  const stringInvertida = inverterString(minhaString);
  console.log(stringInvertida); // Saída: !dlroW ,olleH