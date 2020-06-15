   //Vetores e objetos

   const programador = {
    nome: 'Alan',
    idade: '29',
    tecnologias: [
        {nome: 'Javascript',especialidade: 'Web/Mobile'},
        {nome: 'Java', especialidade: 'Games/Mobile'}
    ]
}

console.log(`o usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia
${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade} `)