const nomes = ["Arom", "Abraham", "Dridon", "Ramon", "Cbum", "Vava"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.lenght);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
