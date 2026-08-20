// Array<T> - T[]
function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatenaArgs(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

const result = multiplicaArgs(1, 2, 3);
const result2 = concatenaArgs('a', 'b', 'c');
console.log(result)
console.log(result2)
