
let sistemaVendas = () => {

    let opcao
    let vetVendedores = []
    let vetVendas = []
    do{
        opcao = Number(prompt(`Informe: \n1. Cadastrar vendedor \n2. Cadastrar venda\n3. Procura venda por mês e vendedor \n4. Soma venda por vendedor`))
        switch(opcao){
            case 1: let objeto = {
                codigo: Number(prompt(`Informe o código`)),
                nome: prompt(`Informe o nome`),
                rg: prompt(`Informe o rg`)
            }
            //verificar se já tem outro vendedor com o mesmo código
            let achou = false
            // vetVendedores.length retorna o tamanho do vetor
            for(let i=0;i < vetVendedores.length;i++){
                if (vetVendedores[i].codigo == objeto.codigo){ // achei o usuário procurado
                      achou = true // achei
                }
            }
            if (!achou){
                // adiciona o objeto no vetor
                vetVendedores.push(objeto)
                alert(`Vendedor cadastrado com sucesso`)
            }
            else (
                alert(`Vendedor já existe com esse código`)
            )
            console.log(vetVendedores)
                    break
            case 2: let objeto1 = {
                codigo: Number(prompt(`Informe o código do vendedor`)),
                mes: Number(prompt(`Informe o mês da venda`)),
                valor: Number(prompt(`Informe o valor da venda`))
            }
            let achou1 = false
            for(let i=0;i < vetVendas.length;i++){
                if ((vetVendas[i].codigo == objeto1.codigo) && (vetVendas[i].mes == objeto1.mes)){ // achei o usuário procurado
                      achou1 = true // encontrei - não podemos cadastrar a venda
                }
            }
            if (!achou1){
                vetVendas.push(objeto1)
            }
            else (
                alert(`Já existe vendas deste vendedor neste mês`)
            )
            console.log(vetVendas)
                    break
            case 3: let codigo = Number(prompt(`Informe o código do vendedor`))
                    let mes = Number(prompt(`Informe o mês da venda`))
                    // percorre vetor de vendas
                    let achou3 = false
                    for(let i=0; i<vetVendas.length; i++){
                        if((vetVendas[i].codigo == codigo) && (vetVendas[i].mes == mes)){
                            console.log(`O valor da venda do funcionario ${codigo} no mês ${mes} foi ${vetVendas[i].valor}`)
                            achou3 = true
                        }
                    }
                    if (!achou3){
                        console.log(`Venda não encontrada para este funcionário neste mês`)
                    }
                    break
            case 4: let codigo4 = Number(prompt(`Informe o código do vendedor`))
                    // percorrer o vetor de vendas
                    let achou4 = false
                    let soma = 0
                    for(let i=0; i<vetVendas.length; i++){
                        if(vetVendas[i].codigo == codigo4){
                            let soma = soma + vetVendas[i].valor
                            achou4 = true
                        }
                    }
                    if(soma == 0){
                        console.log(`Venda não encontrada para este funcionário, ou igual a 0`)
                    }
                    else{
                        console.log(`O total de vendas do vendedor ${codigo4} foi ${soma}`)
                    }
                    break
            case 5: let mes5 =  Number(prompt(`Informe o mês de interesse`))
                    let maiorValor = 0
                    let vendedorMaisVendeu = 0
                    for(let i=0; i<vetVendas.length; i++){
                        if(vetVendas[i].mes == mes5){
                            if(vetVendas[i].valor > maiorValor){
                                maiorValor = vetVendas[i].valor // atualiza o maior valor
                                vendedorMaisVendeu = vetVendas[i].codigo
                            }
                        }
                    }
                    console.log(`O vendedor que mais vendeu foi ${vendedorMaisVendeu} com ${maiorValor}`)
                    break
            case 6: alert(`O programa será encessaro`)
                    break
            default: alert(`Opção inválida`)
        }
    }
    while (opcao != 6)
}