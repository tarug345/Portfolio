let nomes = {'CARTAO 1','CARTAO 2','CARTAO 3'}
let valores = {'','','',}
export function criarCartoes(){
    let sectionCartoes = document.getElementById('cartoes');

    
        for(let i = 0; i < 20; i++) {
            let cartao = document.createElement('div');
            cartao.className = 'cartao';
            let h1 = document.createElement('h1');
            h1.textContent = 'Nome';
            let h3 = document.createElement('h3');
            h3.textContent = 'R$9999,99';
            let p = document.createElement('p');
            p.textContent = 'sobre...';

            cartao.appendChild(h1);
            cartao.appendChild(h3);
            cartao.appendChild(p);
            sectionCartoes.appendChild(cartao);
        }
}