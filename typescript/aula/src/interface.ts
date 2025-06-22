interface Aluno{
    nome:string;
    idade:number;
    time?:string;
    endereco:string;
}

const aluno:Aluno = {
    nome:"Leandro",
    idade:30,
    time:"Flamengo",
    endereco: "Rua Bingen",
}
console.log(aluno);

function exibirAluno({nome,idade,endereco}:Aluno):void{
    console.log(`${nome} - ${idade} - ${endereco}`);
}
exibirAluno({nome:"Mariana", idade:45, endereco:"Rua do Imperador"});
