// cria vetores com objetos

let vetor = []

for(let i=0;i<4;i++){
    // cria objeto
    let objeto = {
        nome: prompt(`Informe o nome do produto`),
        quantidade: Number(prompt(`Informe a qauntidade do produto`)),
        preco: Number(prompt(`Informe o preço do produto`))
    }
    // adiciona o objeto no vetor
    vetor.push(objeto)
}

// calcula a média de preço dos produtos
let soma = 0 
for(let i=0;i<4;i++){
   soma = soma + vetor[i].preco
}
console.log(`A média é de ${soma/4}`)