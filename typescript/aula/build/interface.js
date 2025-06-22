"use strict";
const aluno = {
    nome: "Leandro",
    idade: 30,
    time: "Flamengo",
    endereco: "Rua Bingen",
};
console.log(aluno);
function exibirAluno({ nome, idade, endereco }) {
    console.log(`${nome} - ${idade} - ${endereco}`);
}
exibirAluno({ nome: "Mariana", idade: 45, endereco: "Rua do Imperador" });
