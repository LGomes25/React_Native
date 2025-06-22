"use strict";
function login(username) {
    let message = `Bem Vindo ${username}`;
    console.log(message);
}
login("Fulano");
//outra maneira
function login2(username) {
    let message = `Bem Vindo ${username}`;
    return message;
}
console.log(login2('Fulano'));
const loginArrow = (nome) => {
    let message = `Bem vindo ${nome}`;
    return message;
};
console.log(loginArrow("Sujeito"));
function cadastro(id, nome, situacao = true, email) {
    console.log(`${id} - ${nome}, ${situacao} ${email}`);
}
cadastro(1, "Thayná", false);
