// Usado quando uma função não retorna nada
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Daniel',
  sobrenome: 'Alves',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Daniel', 'Alves');
pessoa.exibirNome();
