//definir Classe Bancária
class ContaBancaria{
    #saldo;

//propriedades
constructor(){
this.#saldo = 0;

}

//métodos
depositar(valor){
    this.#saldo += valor;
}

sacar(valor){
    this.#saldo -= valor;
}

temsaldoparasacar(valor){
    return valor <= this.#saldo;
}

get saldo (){
    return this.#saldo;
}
}
class CaixaEletronico {
    constructor(conta){
        this.conta = conta;
}
    depositar(){
        //pegar o valor do depósito
        
        const valordeposito = parseFloat(document.getElementById("valordeposito").value)
        
        //fazer o despósito na conta
        
        this.conta.depositar(valordeposito);
        
        //Exibir saldo atualizado 
       
        this.mostrarsaldo(this.conta.saldo);
        
    }
    sacar(){
        //pegar valor do saque
        const valorsaque = parseFloat(document.getElementById("valorsacar").value)
        //Fazer o saque na conta    
        if(this.conta.temsaldoparasacar(valorsaque)){
            this.conta.sacar(valorsaque);
            this.mostrarsaldo(this.conta.saldo);
        }else{
            this.mostrarsaldo("insuficiente!");
        }
        //Mostrar Saldo
    }
    mostrarsaldo(saldo){
      document.getElementById("saldo").textContent = `Saldo R$ ${saldo}`;
      document.getElementById("valordeposito").value = "";
      document.getElementById("valorsaque").value = "";
    }
}
// criar instâncias
const conta = new ContaBancaria();
const caixaeletronico = new CaixaEletronico(conta);

