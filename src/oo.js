// function Pokemon(nome, tipo) {
//     this nome = nome;
//     this tipo = tipo;
// }

// const pikachu = new Pokemon("Pikachu", "elétrico")

class Pokemon {
    #hp = 100;
    // nome = '';
    // tipo = '';

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} Atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHp() {
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('pikachu', 'Eletrico')
    }

    atacar() {
        console.log(`${this.nome} Atacou com choque do travão`)
    }
}


const pikachuDoAsh = new Pikachu(/*'pikachu', 'elétrico'*/)

pikachuDoAsh.recebeuAtaque()
pikachuDoAsh.hp = 5000;

console.log(pikachuDoAsh.hp)

pikachuDoAsh.atacar()
pikachuDoAsh.exibeHp()

const pikachu = new Pokemon('pikachu', 'eletrico')
pikachu.atacar('choque do trovao')
// pikachu.nome = 'pikachu';
// pikachu.tipo = 'elétrico';
console.log(pikachu);
console.log(pikachuDoAsh);

console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);