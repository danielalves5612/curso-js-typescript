type TemNome = {nome: string}
type TemSobrenome = {sobrenome: string}
type TemIdade = {idade: number}
type Pessoa = TemNome & TemSobrenome & TemIdade

type AB = 'A' | 'B'
type AC = 'A' | 'C'
type Intersecao = AB & AC

const pessoa: Pessoa = {
    nome: 'Daniel',
    sobrenome: 'Alves',
    idade: 21
}

console.log(pessoa)
