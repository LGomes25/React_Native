"use strict";
//não tem heranca
const marca = {
    id: 1,
    nome: "BYD",
    descricao: "SUV",
};
//SPREAD > agrega o array em outro
const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [...array1, 8, 9, 10];
console.log(array2);
const array3 = [8, 9, 10, ...array2];
console.log(array3);
