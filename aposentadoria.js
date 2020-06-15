//Cálculo simples de aposentadoria


const nome = 'Alan',
sexo = 'M',
idade = 29,
contribuicao = 30,
calculo = idade + contribuicao;


 if (sexo === 'M' && calculo >= 95 && contribuicao >= 35) {
    console.log (nome  + ', você já pode se aposentar! ')
    
}else if (sexo === 'F' && calculo >= 85 && contribuicao >= 30) {
    console.log (nome  + ', você já pode se aposentar! ')
    
} else {
    console.log (nome  + ', você ainda não pode se aposentar! ')
} 


/* // Segunda maneira de se fazer o cálculo, com boolean
const masculino = sexo === 'M' && contribuicao >= 35 && calculo >=95;
const feminino = sexo === 'F' && contribuicao >=30 && calculo >=85;

if (masculino || feminino) {
    console.log(nome  + ', você já pode se aposentar!')
}else {
    console.log (nome  + ', você ainda não pode se aposentar! ')
}
   

 */


   
