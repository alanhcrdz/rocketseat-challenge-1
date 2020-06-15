 //Construção e impressão de objetos
//Armazenar dados da empresa Rocketseat, sendo eles: nome, cor, foco, endereço;

const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco:  {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
} 

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

