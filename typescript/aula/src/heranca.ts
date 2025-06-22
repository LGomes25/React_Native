interface Pessoa{
    nome: string;
    idade: number;
}

interface funcionario extends Pessoa{
    cargo:string;
    salario?: number;
}

const colaborador:funcionario ={
    nome: "Adriana",
    idade: 25,
    cargo:"programadora",
}

console.log(colaborador);
