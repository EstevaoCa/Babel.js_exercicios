// Rest 

function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
    // console.log(arguments)
    // //return a + b + c ;
}
console.log(somar(10, 20, 30))

function somaComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}
console.log(somaComRest(10, 20, 30, 40));


// Spread
const numeros = [1, 2, 3, 4]
console.log(...numeros);

const timesDeFutebolSp = ['santos', 'palmeras', 'bragantino', 'sao paulo'];
const timesDeFutebolRio = ['vasco', 'botafogo', 'flamengo', 'fluminense'];

// const timesDeFutebol = timesDeFutebolSp.concat(timesDeFutebolRio);
const timesDeFutebol = [...timesDeFutebolSp, ...timesDeFutebolRio]
    // timesDeFutebolSp.concat(timesDeFutebolRio)
    console.log(timesDeFutebol);

const carroDaJulia = {
    modelo: "gol",
    marca: "vw",
    motor: "1.8",
}
const carroDaAna = {
    modelo: "gol",
    marca: "vw",
    motor: "1.6",
}
console.log(carroDaAna)

// desestruturaçao
// const motorDoCarroDaAna = carroDaAna.motor

const { motor: motorDoCarroDaAna } = carroDaAna
const { motor: motorDoCarroDaJulia } = carroDaJulia

const [item, item2, item3, ...outrosTimes] = timesDeFutebol;


