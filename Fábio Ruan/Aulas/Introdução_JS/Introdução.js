
var ola = "Olá Mundo JS!"
console.log(ola);
function log(valor) {
    console.log(valor);
}
var valor = 10;
log(typeof valor); //number

var palavra = "palavra";
log(typeof palavra); //string

var is0k = true;
log(typeof is0k); //boolean

var meu0bj = {}; //object
var meuArray = []; //Array
var nulo = null; //null
var variavelFlamengo; //undefined

function compararEscopo(){
    if(true){
        var varDentro = "Var dentro do bloco";
        let letDentro = "Let dentro do bloco";
        const constDentro = "Const dentro do bloco";
    }
    log (varDentro); //funciona
    //log (letDentro); //nao funciona
    //log(constDentro);//nao funciona
}    
compararEscopo();

//Operações Simples

const n1 =1;
const n2 =5;
const valorNumericoStr = "5";

log (n1 + n2) //6
log(n1 / n2) //0.2
log (n1 * n2)//5

//Operação Lógica

log (n1 == n2); //false
log(n2 == valorNumericoStr); //true
log(n2 === valorNumericoStr); //false

log((n2 > n1 || n1 > n2) && 1 > 2); //false

//Listas
let frutas = ["Maça", "Banana", "Laranja"];
log(frutas.length); //3
log(frutas [1])//Banana

//add novo item
frutas.push("Manga");

log(frutas);

//Remover o último
frutas.pop();

//estruturas condicionais
const idade = 18;
if (idade >= 18) {
    log("Você é maior de idade");
} else if (idade >= 2) {
    log("Você é uma criança");
} else {
    log("Você é um bebê");
}

const instituicao = "ceub"
switch (instituicao) {
    case "ceub":
        log("FACULDADE");
        break;
    case "cil":
        log("Escola de linguas");
        break;
        //break
        case "cem10":
        log("escola");
        //break;
    default:
        log(" desconhecida");
        break;
}
for (let loop = 0; loop < 5; loop++) {
    log(`meu valor no loop: ${loop}`);
}

let valorwhile = 0;
while (valorwhile < 5) {
    log(`meu valor no while: ${valorwhile}`);
    valorwhile++; //se esquecer vai ficar infinito
}

//Funções Assincronas permitem executar operações
//sem bloquear a execução do código
async function buscarDados() {
    return new Promise((resolve) => {
     setTimeout(() => {
        
        resolve("Dados Recebidos");
        }, 4 * 1000);
    });
}

async function executarBusca() {
    log("Buscando...");
    let dadosRecebidos = await buscarDados(); //
    log("finalizado!");
    log(dadosRecebidos)
}

executarBusca();
