"use strict";
function mostrarPromocao(preco) {
    console.log(`Promocao do curso:${preco}`);
}
const novoCurso = {
    id: 1,
    nome: "Java",
    data: new Date(2025, 5, 10),
    preco: 2000,
    promocao: mostrarPromocao,
};
// novoCurso.id =2; id é somente leitura apos a criação
console.log(novoCurso.preco);
console.log(novoCurso.promocao);
novoCurso.promocao(1000);
