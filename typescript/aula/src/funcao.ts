function login(username:string):void{
    let message = `Bem Vindo ${username}`;
    console.log(message);
}
login("Fulano");


//outra maneira
function login2(username:string):string{
    let message = `Bem Vindo ${username}`;
    return message;
}
console.log(login2('Fulano'));


const loginArrow = (nome:string) : string => {
    let message = `Bem vindo ${nome}`; 
    return message;
}
console.log(loginArrow("Sujeito"));


function cadastro (id:number, nome:string, situacao=true, email?:string):void{
    console.log(`${id} - ${nome}, ${situacao} ${email}`);
}
cadastro(1,"Thayná", false);