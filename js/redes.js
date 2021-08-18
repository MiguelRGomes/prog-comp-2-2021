let gerenciaRedesSociais = () => {
    // cadastro das redes sociais 

    let vetorRedesSociais = []
    
    for(let i=0;i<5;i++){
        // cria objeto redes
        let objeto = {
            codigo: Number(prompt(`Informe o código da rede social`)),
            nome: prompt(`Informe o nome da rede social`),
            link: prompt(`Informe url da rede social`)
        }
        // adiciona o objeto no vetor
        vetorRedesSociais.push(objeto)
    }
    // cadastro dos usuarios
    let vetorUsuarios = []
    for(let i=0;i<5;i++){
        // cria objeto usuario
        let objeto = {
            login: prompt(`Informe o seu login da rede social`),
            nome: prompt(`Informe o seu nome`),
            codigoRedeSocial: Number(prompt(`Informe o código da rede social`)),
            qtdePost: Number(prompt(`Informe a quantidade de post`))
        }
        // só faremos isso se a rede social existir
        let achou = false // assumo que não encontrei a rede social
        let j = 0 // indice do vetor da rede social
        while(!achou && j<5){// sai ou porque achou ou porque acabou o vetor
            if(vetorRedesSociais[j].codigo == objeto.codigoRedeSocial){// achamos
                vetorUsuarios.push(objeto)// inserimos
                achou = true
                alert(`Usuário inserido com sucesso`)
            } 
            j++ // prepara para ir ao próximo elemento
        }
        if (!achou){
            alert(`Usuário não inserido, pois a rede social não foi encontrada`)
        }
       i++
    }
    // Exericio1. o usuário informa a rede social, e o programa retorna quantos post foram feitos
    // Exericio2. o programa retorna quantos post foram feito em todas as redes sociais
    // Exericio3. o usuário informa o login do usuario, e o programa retorna quantos post ele fez
    // Exericio4. o programa retorna quantos post foram feito por cada usuário
}
