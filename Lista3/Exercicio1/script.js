do {
    var valorCompra = parseFloat(prompt("informe o valor da compra","")),
        valorPago = parseFloat(prompt("informe o valor pago","")),
        troco = 0 , notas50 = 0, notas20 = 0, notas10 = 0, notas5 = 0, notas2 = 0;
    
    if (valorCompra <= valorPago) {
      troco = valorPago - valorCompra;
      
      notas50 = parseInt(troco / 50);
      troco %=50;
      
      notas20 = parseInt(troco / 20);
      troco %=20;
      
      notas10 = parseInt(troco / 10);
      troco %=10;
      
      notas5 = parseInt(troco / 5);
      troco %=5;
      
      notas2 = parseInt(troco / 2);
      troco %=2;
      
      alert(
      `
      Valor pago: ${valorPago} 
      Valor compra: ${valorCompra} 
      Troco: ${valorPago - valorCompra} 
      
      Notas de R$ 50,00: ${notas50} 
      Notas de R$ 20,00: ${notas20} 
      Notas de R$ 10,00: ${notas10} 
      Notas de R$ 5,00: ${notas5} 
      Notas de R$ 2,00: ${notas2} 
      Notas de R$ 1,00: ${troco} 
      `
      )    
    }  else
      alert(`A quantia paga é insuficiente para realizar a compra!`);
  } while(confirm("Deseja executar novamente?"));