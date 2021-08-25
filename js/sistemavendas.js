
let sistemaVendas = () => {

    let opcao
    let vetVendedores = []
    let vetVendas = []
    do{
        opcao = Number(prompt(`Informe: \n1. Cadastrar vendedor \n2. Cadastrar venda\n3. Sair`))
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
            case 2: let objeto = {
                codigo: Number(prompt(`Informe o código do vendedor`)),
                mes: Number(prompt(`Informe o mês da venda`)),
                valor: Number(prompt(`Informe o valor da venda`))
            }
            let achou = false
            for(let i=0;i < vetVendas.length;i++){
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
                    break
            case 3: alert(`O programa será encessaro`)
                    break
            default: alert(`Opção inválida`)
        }
    }
    while (opcao != 3)
}