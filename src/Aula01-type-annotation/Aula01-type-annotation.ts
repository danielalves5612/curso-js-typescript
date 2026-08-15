// Tipos básicos (aqui ocorre inferência de tipos)
const nome: string = 'Luiz'; // Qualquer tupo de strings '' "" ``
const idade: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
const adulto: boolean = true; // true ou false
const simbolo: symbol = Symbol('qualquer-symbol'); // symbol
const big: bigint = 10n; // bigint

// Arrays
const arrayDeNumeros: Array<number> = [1, 2, 3];
const arrayDeNumeros2: number[] = [1, 2, 3];
const arrayDeLetras: Array<string> = ['a', 'b'];
const arrayDeLetras2: string[] = ['a', 'b'];

//Objetos
const pessoas: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Daniel',
  idade: 21,
};

function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
