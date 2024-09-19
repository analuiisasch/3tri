const cliente = {
    nome:"João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};
cliente.endereco = [
   {
  rua:"R. Josheph Cliember",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
 },

];
function LigaParaCliente(telefoneComercial, telefoneResidencial) {
 console.log(`Ligando para ${telefoneComercial}`);
 console.log(`Ligando para ${telefoneResidencial}`);
}


