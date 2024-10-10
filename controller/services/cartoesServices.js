export async function buscarCartoes() {
    try {
        const response = await fetch('http://localhost:3000/cartoes'); // Faz uma requisição HTTP para o servidor para obter os cartões
        const data = await response.json(); // Converte a resposta em um objeto JavaScript
        const cartoes = data.cartoes; // Armazena os cartões na variável cartoes
        return cartoes;
    } catch (e) {
        console.error('Erro ao buscar os cartões:', e);
    }
}