const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++ ) {
    console.log(`Eu tenho perfil de rede social: ${redesSociais[i]}`)
}
redesSociais.forEach(function(nomeDaRedeSocial, indice){
    console.log(`${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})
const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

const alunos2 = alunos.map(function(itemAtual) {
    itemAtual = {
        nome: itemAtual,
        curso: 'Frontend'
    }
    return itemAtual;
})

console.log(alunos2);

const numeros = [1, 2, 3, 4, 5];
const dobroDosNumeros = numeros.map(function(numeroAtual){
    numeroAtual = numeroAtual * 2;
    return numeroAtual;
})

console.log(dobroDosNumeros);

// para vereficar se existe item paulo
const paula = alunos2.find(function(item){
    return item.nome = 'Paula'  // true ou boleano
})

console.log(paula);

// para vereficar se encontrar o índice 1 elemento em array
const indeceDaPaula = alunos2.findIndex(function(item){
    return item.nome = 'Paulo'  // true ou boleano
})

console.log(indeceDaPaula);

// Adicionar os itens
alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
})

// Every verefica se todos item é realmente front end 
const todosAlunoDeFrontend = alunos2.every(function(item){
    return item.curso === 'Frontend'
})
console.log(todosAlunoDeFrontend);

// Some Para vereficar se existe algum item
const existeAlgumAlunoNoBackend = alunos2.some(function(item){
    return item.curso === 'Backend' && item.curso === 'Frontend'
})
console.log(existeAlgumAlunoNoBackend);

// criar função de fitrar 
function filtraAlunosDeBackend (aluno){
    return aluno.curso === 'Backend'
}

const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend);

// Filter filtros as tarefas
console.log(alunosDeBackend);


const nums = [10, 20, 30, 10];

// pegar cada item e vai adicionando e somando
const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma);

let somaComFor = 0 
for(let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}
console.log(somaComFor);

const nomeDosAlunos = alunos2.reduce(function(acumulador, itemAtual){
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, '')
console.log(nomeDosAlunos)
