// Tipo tuple, pode ter mais de um tipo de valor dentro de um array
const dadosClientes1: readonly [number, string] = [1, 'Daniel']
const dadosClientes2: [number, string, string] = [2, 'Daniel', 'Alves']
const dadosClientes3: [number, string, string?] = [3, 'Isabel']

console.log(dadosClientes1)
console.log(dadosClientes2)
console.log(dadosClientes3)

// readonly array
const array1: readonly string[] = ['Daniel', 'Alves']
const array2: ReadonlyArray<string> = ['Daniel', 'Alves']

console.log(array1)
console.log(array2)
