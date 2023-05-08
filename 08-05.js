// 1 -> Escreva na tela todos os números pares de 0 a 100

    for (let i = 0; i <=100; i++){
        if (i % 2 === 0){
            console.log(i);
        }
    }
// 2 -> Criar um algoritmo que percorre um array de números qualquer e retorna a soma total desses números

// ex: [2, 4, 6, 8] -> Soma: 2 + 4 + 6 + 8 = 20

let numeros = [2,4,6,8];
let soma = 0;
for (let i = 0; i < numeros.length; i++){
    soma += numeros[i];
}
console.log("A soma dos valores do Array: " + soma);

 

// 3 -> Crie uma função que remova todos os números negativos de um array

// ex: [-1, 1, -2, 2, -3, 3] -> [1, 2, 3]

function removeNegativos(array) {
    let novaArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= 0) {
        novaArray.push(array[i]);
      }
    }
    return novaArray;
  }
  
  let numerosNegativo = [-1, 1, -2, 2, -3, 3];
  let numerosPositivo = removeNegativos(numerosNegativo);
  console.log(numerosPositivo); 
  


// 4 -> Percorra um array de numeros qualquer.. e crie um novo array com todos os numeros do primeiro multiplicado por 2

// ex: [1, 2, 3, 4, 5] -> [2, 4, 6, 8, 10]

function criarSomar(array){
let novoArray = [];   
    for(let i = 0; i < array.length; i++){
    novoArray.push(array[i]*2)
    }
return novoArray;
}
let primeiro = [1, 2, 3, 4, 5];
let segundo = criarSomar(primeiro);
console.log(primeiro);
console.log(segundo);

// [[Bonus]] -> Crie uma função que soma dois numeros e devolve uma Promise. Caso a soma seja Par o valor deve ser resolvido e caso seja Impar deve ser rejeitado

// ex:

// soma(1, 2).then(res => {

//     console.log("Valor é par")

// }).catch(err => {

//     console.log("Valor é impar")

// })
function Somar(num1, num2){
   return new Promise = ((resolve,reject) => {
        const resultado = num1 + num2;
        if(resultado % 2 === 0 ){
            resolve(resultado);
        }else{
            reject ("O valor é impar!");
        }
    });
}
soma(1, 2)
  .then((res) => {
    console.log('Valor é par');
  })
  .catch((err) => {
    console.log(err);
  });


 
