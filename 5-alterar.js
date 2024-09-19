const pessoa = {
    nome:"Luma",
    profissao:"Engenheira",
};
console.log(pessoa.nome);
console.log(pessoa.telefone);//undefined
pessoa.telefone = "11 2223333444"; //inclusao telefone
console.log(pessoa.telefone);;
pessoa.nome = "Luma Silva"; //Alteração nome
console.log(pessoa);
const novaPessoa = {
    nome: "Pedro",
};
// pessoa = novaPessoa;
