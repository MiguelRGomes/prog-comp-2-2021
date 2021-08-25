
let sistemaVendas = () => {

    let opcao
    let vetVendedores = []
    do{
        alert(`Informe: \n1. Cadastrar vendedor \n2. Cadastrar venda\n3. Sair`)
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
                if (codigo == vetVendedores[i].codigo){ // achei o usuário procurado
                      achou = true // achou o usuário
                }
            }
            // adiciona o objeto no vetor
            vetVendedores.push(objeto)
                    break
            case 2:
                    break
            case 3: alert(`O programa será encerrado`)
                    break
            default: alert(`Opção inválida`)
        }
    }
    while (opcao != 3)
}