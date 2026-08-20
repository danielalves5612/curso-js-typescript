// Tipo never, uma função que nunca retorna nada
function criaErro():never {
    throw new Error('Qualquer erro')
}

criaErro()
