let meuMap = new Map();
meuMap.set ("nome", "gian");
meuMap.set ("stack", "html, css, js");


console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("nome"));

// meuMap.clear();

console.log(meuMap.size);

for (let chave of meuMap.keys()){
    console.log(chave);
}

for (let valor of meuMap.values()){
    console.log(valor);
}

for (let entrada of meuMap.entries()){
    console.log(entrada);
}

for (let [chave, valor] of meuMap.entries()){
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap);
// [nome => gian]
// [stack => html, css, js]

const cpfs = new Set();

cpfs.add('22557185027');
cpfs.add('87428591074');
cpfs.add('21761120085');

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['gian Souza', 'Jose Paulo', 'Maria Isabel', 'Luana', 'gian Souza', 'Luana']

const arrayComoSet = new Set([...array])

const arraySemItemDuplicados = [...arrayComoSet]

console.log(arrayComoSet);
console.log(arraySemItemDuplicados);

