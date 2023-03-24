// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
 function calculaAreaRetangulo(){ 
  // implemente sua lógica aqui
  let altura = prompt("Qual a altura do retângulo?")
  let largura = prompt("Qual a largura do retângulo?")
  let area = altura * largura;
  console.log(area) 
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = prompt("Em que ano estamos?")
let anoDeNascimento = prompt("Em que ano você nasceu?")
let diferenca = anoAtual - anoDeNascimento
console.log(diferenca)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
let imc = peso / (altura * altura);
return (imc)
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario(){
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
let nome = prompt("Qual o seu nome?")
let idade = prompt("Quantos anos você tem?")
let email = prompt("Qual o seu e-mail?")

console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
} 

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Diga uma cor:")
const cor2 = prompt("Diga mais uma cor:")
const cor3 = prompt("Diga uma última cor:")
const respostaDasCores = [cor1,cor2,cor3]
console.log(respostaDasCores)
}



// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
let ingressosVendidos = custo / valorIngresso
return ingressosVendidos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const first = array[0]
  const last = array[array.length -1]
  
  array[0] = last
  array[array.length -1] = first

  return array(last,first)
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return (array[array.length -1])
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const first = array[0]
const last = array[array.length-1]
array[0] = last
array[array.length-1] = first 
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const string1New = string1.toUpperCase()
const string2New = string2.toUpperCase()
return  string1New === string2New
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

let currentYear = prompt("Ano atual:")
let birthYear = prompt("Qual o ano do seu nascimento?")
let cnhYear = prompt("Em qual ano você tirou sua CNH?")

let age = currentYear - birthYear
let cnhTempo = currentYear - cnhYear
let verificaRenovacao5Anos = cnhTempo >= 5 &&  age <= 20
let verificaRenovacao10Anos = cnhTempo >= 10 && age >20 && age <=50
let verificaRenovacao15Anos = cnhTempo >= 15 && age >50
let verificaRenovacao = verificaRenovacao5Anos || verificaRenovacao10Anos || verificaRenovacao15Anos

return console.log(verificaRenovacao)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
const anosMultiplos400 = ano % 400 === 0
const anosMultiplos100 = ano % 100 === 0
const anosMultiplos4 = ano % 4 === 0
return (anosMultiplos400 || (anosMultiplos4 && !anosMultiplos100))
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

const idade = prompt("Você tem mais de 18 anos?")
const ensinoMedio = prompt("Você possui ensino médio completo?")
const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

const verificaIdade = idade === "sim"
const verificaEnsinoMedio = ensinoMedio === "sim"
const verificaDisponibilidade = disponibilidade === "sim"
const validaInscricao = verificaIdade && verificaEnsinoMedio && verificaDisponibilidade

console.log(validaInscricao)
}
