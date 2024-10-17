// function funcaoMuitoPesada() {
//     let execucoes = 0
//     for (let i = 0; i > 10000000000; i++) {
//         execucoes++
//     }
//     return execucoes;
// }

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 10000000000; i++) {
            execuco++;
        }
        resolve(execucoes);
    } catch(e) {
        reject('Deu erro na interaçao dos numeros')
    }
})

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o Usuario: ${login}`)
        }, 3000)

    })
}

// console.log("inicio")
// console.log(funcaoMuitoPesada())
// funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
// console.log("Fim")

// thread principal a b 
// promise c ------>


async function execucaoPrincipal() {
    console.log("inicio")

    // await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
    // const resultado = await funcaoMuitoPesadaPromise;
    // console.log(resultado)
    promiseComParametros('estevao@gmail.com', 123456).then(resultado => {
        console.log(resultado);
    })
    
    try {
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado)
    } catch(e) {
        console.log(e)
    }
    
    console.log("Fim")
}

execucaoPrincipal()