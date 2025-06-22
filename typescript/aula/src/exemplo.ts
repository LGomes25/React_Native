const texto = "Aula de React Native - aula03"
console.log(texto);

let nome: string = "Roni";
let idade: number = 49;

console.log(nome);

let linguagens = ["Java","React",1000];
linguagens.push("PHP"); //acrescenta numeros ou textos ao vetor

console.log(linguagens);

let matricula:string | number;

matricula = 123; //numero
console.log(matricula);
console.log(typeof matricula);

matricula = '1234'; //texto
console.log(matricula);
console.log(typeof matricula);

let preco: any; //aceita qualquer tipo como javascript
preco ="200";
preco = 200.0;
preco = undefined;

let logado: boolean = true;
let situacao: number = 1;  //qualquer numero diferente de 0 é verdadeiro
logado = Boolean(situacao);
console.log(logado);




