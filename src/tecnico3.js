const dados = [
    { dia: 1, valor: 100 },
    { dia: 2, valor: 200 },
    { dia: 3, valor: 400 },
    { dia: 4, valor: 300 },
    { dia: 5, valor: 400 },
    { dia: 6, valor: null },
    { dia: 7, valor: 500 },
    { dia: 8, valor: 600 },
    { dia: 9, valor: null },
    { dia: 10, valor: 700 }
  ];
  
  // Função para analisar o faturamento
  function analisarFaturamento(dados) {
    // Filtrar dias com faturamento não nulo
    const diasComFaturamento = dados.filter(dia => dia.valor !== null);
  
    // Calcular o faturamento total e a média
    const faturamentoTotal = diasComFaturamento.reduce((total, dia) => total + dia.valor, 0);
    const mediaMensal = faturamentoTotal / diasComFaturamento.length;
  
    // Encontrar o menor e o maior valor
    const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));
    const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));
  
    // Contar os dias com faturamento acima da média
    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;
  
    return {
      menorValor,
      maiorValor,
      diasAcimaDaMedia
    };
  }
  
  // Exemplo de uso
  const resultado = analisarFaturamento(dados);
  console.log(resultado);