// Unknown é mais seguro doq any, pq vc precisa chegar o tipo antes de utilizar

let x: unknown;

x = 100;
x = 'Daniel';
x = 900;
x = 10;
const y = 800;

if (typeof x === 'number') console.log(x + y);
