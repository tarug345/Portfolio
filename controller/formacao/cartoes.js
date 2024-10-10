// // Vetor de objetos que representam os cartões
// let cartoes = [
//     {
//         nome: 'Cartão 1',             // Nome do cartão
//         valor: '19,20',               // Valor do cartão
//         descricao: 'Descrição do Cartão 1', // Descrição do cartão
//         imagem: 'https://assets.mubicdn.net/images/artworks/605435/images-original.png?1686656725' // URL da imagem
//     },
//     {
//         nome: 'Cartão 2',             // Nome do cartão
//         valor: '29,99',               // Valor do cartão
//         descricao: 'Descrição do Cartão 2', // Descrição do cartão
//         imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrLJ6IKmikTJtwQBlCDbGxbtq5jkV_bdl8DQ&s' // URL da imagem
//     },
//     {
//         nome: 'Cartão 3',             // Nome do cartão
//         valor: '39,50',               // Valor do cartão
//         descricao: 'Descrição do Cartão 3', // Descrição do cartão
//         imagem: 'https://f.i.uol.com.br/fotografia/2020/02/10/15813740235e41da475cca0_1581374023_3x2_md.jpg' // URL da imagem
//     },
//     {
//         nome: 'Cartão 4',             // Nome do cartão
//         valor: '55,55',               // Valor do cartão
//         descricao: 'Descrição do Cartão 4', // Descrição do cartão
//         imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXlikNbPxUbc5Bfgt2XKylnWVQ5BeKaVYY0A&s' // URL da imagem
//     },
//     {
//         nome: 'Cartão 5',             // Nome do cartão
//         valor: '2,99',                // Valor do cartão
//         descricao: 'Descrição do Cartão 5', // Descrição do cartão
//         imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7hykkOSbTt9XA1_D1J8_kU9kcSMwYXdnIQ&s' // URL da imagem
//     },
//     {
//         nome: 'Cartão 6',             // Nome do cartão
//         valor: '12,33',               // Valor do cartão
//         descricao: 'Descrição do Cartão 6', // Descrição do cartão
//         imagem: 'https://portal6.com.br/wp-content/uploads/2021/08/zeca.png' // URL da imagem
//     }
    
// ];

export async function carregarCartoes() {
    try{
        const response = await fetch('http://localhost:3000/cartoes'); // Faz uma requisição HTTP para o servidor para obter os cartões
        const data = await response.json(); // Converte a resposta em um objeto JavaScript
        const cartoes = data.cartoes; // Armazena os cartões na variável cartoes
        return cartoes;
    }catch(e){
        console.error('Erro ao carregar os cartões:', e);
    }
}

// Função para criar os cartões
export async function criarCartoes() {
    // Seleciona a seção onde os cartões serão inseridos
    let sectionCartoes = document.getElementById('cartoes'); 

    const cartoes = await carregarCartoes(); // Chama a função para obter os cartões
    // Limpa a seção de cartões antes de adicionar novos cartões (caso exista)
    sectionCartoes.innerHTML = ''; // Limpa o conteúdo existente
    console.log(cartoes);

    // Loop para iterar sobre os cartões
    for (let i = 0; i < cartoes.length; i++) {
        // Criação de um novo elemento div para o cartão
        let cartao = document.createElement('div'); 
        cartao.className = 'cartao'; // Adiciona a classe 'cartao' ao elemento

        cartao.style.flexDirection = 'row';  //rows para el elemento

        // Criação de um elemento h1 para o nome do cartão
        let h1 = document.createElement('h1'); 
        h1.textContent = cartoes[i].nome;  // Define o nome do cartão a partir do vetor de cartões

        // Criação de um elemento h3 para o valor do cartão
        let h3 = document.createElement('h3'); 
        h3.textContent = `R$ ${cartoes[i].valor}`;  // Define o valor do cartão a partir do vetor de cartões

        // Criação de um elemento p para a descrição do cartão
        let p = document.createElement('p'); 
        p.textContent = cartoes[i].descricao; // Define a descrição do cartão a partir do vetor de cartões

        // Criação de um elemento img para a imagem do cartão
        let img = document.createElement('img'); 
        img.src = cartoes[i].imagem; // Define a URL da imagem a partir do vetor de cartões
        img.alt = cartoes[i].nome; // Define o texto alternativo da imagem
        img.style.width = '4v'; // Define a largura da imagem para ocupar 100% do cartão
        img.style.height = '8vh'; // Mantém a proporção da imagem
        img.style.borderRadius= '1.7vh'; // Define a borda do cartão

        // Adiciona os elementos h1, h3, p e img ao cartão
        cartao.appendChild(img); // Adiciona a imagem ao cartão
        cartao.appendChild(h1); 
        cartao.appendChild(h3); 
        cartao.appendChild(p); 

        // Adiciona o cartão à seção de cartões
        sectionCartoes.appendChild(cartao); 
    }
}
