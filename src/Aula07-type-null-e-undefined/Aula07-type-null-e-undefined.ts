let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

function squareOf(x: any){
    if(typeof x === 'number') return x * x
    return null
}

const squareOfNumber = squareOf(2)
const squareOfString = squareOf('2')

if(squareOfNumber === null){
    console.log('Conta inválida')
}else{
    console.log(squareOfNumber)
}
