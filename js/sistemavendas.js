
let sistemaVendas = () => {

    let opcao
    let vetVendedores = []
    let vetVendas = []
    let codigo
    let mes

    do{
        opcao = Number(prompt(`Informe: \n1. Cadastrar vendedor \n2. Cadastrar venda\n3. Procura venda por mês e vendedor \n4. Soma venda por vendedor`))
        switch(opcao){
            case 1: cadastraVendedor(vetVendedores)
                    break
            case 2: cadastraVenda(vetVendas)
                    break
            case 3: codigo = Number(prompt(`Informe o código do vendedor`))
                    mes = Number(prompt(`Informe o mês da venda`))
                    consultaVendasCodigoMes(vetVendas, codigo, mes)
                    break
            case 4: codigo = Number(prompt(`Informe o código do vendedor`))
                    consultaVendasCodigo(vetVendas, codigo)
                    break
            case 5: mes = Number(prompt(`Informe o mês de interesse`))
                    consultaVendedor(vetVendas, mes)
                    break
            case 6: consultaVendasMes(vetVendas)
                    break
            case 7: alert(`O programa será encessaro`)
                    break
            default: alert(`Opção inválida`)
        }
    }
    while (opcao != 6)
}

let cadastraVendedor = (vetVendedores) => {
    let objeto = {
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
}

let cadastraVenda = (vetVendas) => {
    let objeto = {
        codigo: Number(prompt(`Informe o código do vendedor`)),
        mes: Number(prompt(`Informe o mês da venda`)),
        valor: Number(prompt(`Informe o valor da venda`))
    }
    let achou = false
    for(let i=0;i < vetVendas.length;i++){
        // não podemos cadastrar duas vendas para um mesmo vendedor no mesmo mês
        if ((vetVendas[i].codigo == objeto.codigo) && (vetVendas[i].mes == objeto.mes)){ // achei o usuário procurado
              achou = true // encontrei - não podemos cadastrar a venda
        }
    }
    if (!achou){
        vetVendas.push(objeto)
    }
    else (
        alert(`Já existe vendas deste vendedor neste mês`)
    )
    console.log(vetVendas)
}

let consultaVendasCodigoMes = (vetVendas, codigo, mes) => {
    // percorre vetor de vendas
    let achou = false
    for(let i=0; i<vetVendas.length; i++){
        if((vetVendas[i].codigo == codigo) && (vetVendas[i].mes == mes)){
            console.log(`O valor da venda do funcionario ${codigo} no mês ${mes} foi ${vetVendas[i].valor}`)
            achou3 = true
        }
    }
    if (!achou){
        console.log(`Venda não encontrada para este funcionário neste mês`)
    }
}

let consultaVendasCodigo = (vetVendas, codigo) => {
    // percorrer o vetor de vendas
    let achou = false
    let soma = 0
    for(let i=0; i<vetVendas.length; i++){
        if(vetVendas[i].codigo == codigo){
            let soma = soma + vetVendas[i].valor
            achou = true
        }
    }
    if(soma == 0){
        console.log(`Venda não encontrada para este funcionário, ou igual a 0`)
    }
    else{
        console.log(`O total de vendas do vendedor ${codigo} foi ${soma}`)
    }
}

let consultaVendedor = (vetVendas, mes) => {
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
}

let consultaVendasMes = (vetVendas) => {
    let vetMeses = [0,0,0,0,0,0,0,0,0,0,0,0]
    // percorre o vetor de vendas
    for(let i=0; i<vetVendas.length; i++){
        let aux = vetVendas[i].mes // mês da venda
        vetMeses[aux-1] = vetMeses[aux-1] + vetVendas[i].valor
    }
    console.log(vetMeses)
}