function conversor() {
    const btnConversor = document.getElementById("btnConversor");
    btnConversor.disabled = true;
    
    let valorDolar = prompt("Digite o valor em dólar que deseja converter para real.");
    let umDolar = 5.73;
    let valorConvertido = (valorDolar * umDolar).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
    alert("O valor em reais é " + valorConvertido);
    
}
  