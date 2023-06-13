// Método que classifica as pessoas e retorna a contagem
function classificarPessoas(pessoas) {
    // Variáveis para contar as categorias
    let criancas = 0;
    let adolescentes = 0;
    let adultos = 0;
  
    // Navegar pela lista de pessoas
    for (let pessoa of pessoas) {
      const { nome, idade, email } = pessoa;
  
      // Classificar com base na idade
      if (idade < 12) {
        console.log(`${nome} - ${email}: Criança`);
        criancas++;
      } else if (idade >= 12 && idade <= 17) {
        console.log(`${nome} - ${email}: Adolescente`);
        adolescentes++;
      } else {
        console.log(`${nome} - ${email}: Adulto`);
        adultos++;
      }
    }
  
    // Retornar o número de pessoas contidas na lista
    return pessoas.length;
  }
  
  // Exemplo de uso do método com alguns dados de exemplo
  const pessoas = [
    { nome: 'João Victor', idade: 10, email: 'sarrafjoao@gmail.com' },
    { nome: 'Rebeca Borges', idade: 15, email: 'borgesrebeca40@gmail.com' },
    { nome: 'Elton Lima', idade: 20, email: 'lanotle@gmail.com' },
  ];
  
  const totalPessoas = classificarPessoas(pessoas);
  console.log(`Total de pessoas: ${totalPessoas}`);
  
  // Teste usando Mocha
  const assert = require('assert');
  
  describe('classificarPessoas', function() {
    it('deve retornar o número correto de pessoas', function() {
      const pessoas = [
        { nome: 'João Victor', idade: 10, email: 'sarrafjoao@gmail.com' },
        { nome: 'Rebeca Borges', idade: 15, email: 'borgesrebeca40@gmail.com' },
        { nome: 'Elton Lima', idade: 20, email: 'lanotle@gmail.com' },
      ];
  
      const totalPessoas = classificarPessoas(pessoas);
      assert.strictEqual(totalPessoas, 3);
    });
  });