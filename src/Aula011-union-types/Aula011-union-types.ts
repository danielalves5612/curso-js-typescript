// union types é utilizado quando vc sabe que pode ter mais de um tipo em determinado valor
function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'))
