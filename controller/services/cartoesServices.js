const baseUrl = 'http://localhost:3000/cartoes';

export async function buscarCartoes() {
    try {
        const response = await fetch(baseUrl); // Faz uma requisição HTTP para o servidor para obter os cartões
        const data = await response.json(); // Converte a resposta em um objeto JavaScript
        const cartoes = data.cartoes; // Armazena os cartões na variável cartoes
        return cartoes;
    } catch (e) {
        console.error('Erro ao buscar os cartões:', e);
    }
}

export async function excluirCartao(cartao) {
    try {
        const response = await fetch('http://localhost:3000/cartoes', {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            }, 
            body: JSON.stringify({ cartao: index }) // Converte o objeto JavaScript em uma string JSON (cartao)
        });
        criarCartoes();
    } catch (e) {
        console.error('Erro ao excluir o cartão:', e);
    }
}