class CaixaDaLanchonete {
    
    //cardápio com código, descrição e valor
    
    código = ["cafe", "chantily", "suco" , "sanduiche", "queijo", "salgado", "combo1", "combo2"];
    //descrição = ["Café", "Chantily (extra do Café)", "Suco Natural", "Sanduíche", "Queijo (extra do Sanduíche)", "Salgado", "1 Suco e 1 Sanduíche", "1 Café e 1 Sanduíche"];
    valor = ["3,00", "1,50", "6,20" , "6,50", "2,00", "7,25", "9,50", "7,50"];


    calcularValorDaCompra(metodoDePagamento, itens) {
        var valortotal = 0;
        var cafe = false;
        var sanduiche = false;
        var flag_acompanhamento = false;
        
        //acompanhamento cafe
        for (let i = 0; i < itens.length; i++) {
            const [Nome, Quantidade] = itens[i].split(',');
            if(Nome == this.código[0]){
                cafe = true;
                break
            }       
        }
        //acompanhamento queijo
        for (let i = 0; i < itens.length; i++) {
            const [Nome, Quantidade] = itens[i].split(',');
            if(Nome == this.código[3]){
                sanduiche = true;
                break
            }       
        }
          
        //verificação flag acompanhamento
        for (let i = 0; i < itens.length; i++) {
            const [Nome, Quantidade] = itens[i].split(',');
            if ((Nome == this.código[1] && cafe == false) || (Nome == this.código[5] && queijo == false)){
                flag_acompanhamento = true;
                break
            }   
        }
        //return da flag acompanhamento
        if (flag_acompanhamento == true){
            return console.log('Item extra não pode ser pedido sem o principal')
        }

        

        //cálculo do valor total percorrendo a lista de itens
        for (let i = 0; i < itens.length; i++) {
            const [Nome, Quantidade] = itens[i].split(',');
            for(let j = 0; j < this.código.length; j++){
                if(Nome == this.código[j]){
                    valortotal += parseFloat(this.valor[j]).toFixed() * Quantidade;
                }     
            }     
        }
        
        console.log(valortotal);
        
        // Regras de negocio de pagamento
        switch (metodoDePagamento) {
            case metodoDePagamento == "dinheiro":
                valortotal = valortotal - (valortotal/100 * 5);
                break;
            case metodoDePagamento == "credito":
                valortotal = valortotal + (valortotal/100 * 3);
              break;
            default:
        }    
    } 
    
} 
export {CaixaDaLanchonete};


