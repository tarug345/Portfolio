import { buscarCarotes } from "./../../../controller/services/formacao/cartoesServices.js";
import { excluirCartoes } from "./../../../controller/services/formacao/cartoesServices.js";
import { mostraTelaCad } from "./../../../controller/formacao/telacad.js";
import { mostraTelaAtt } from "./../../../controller/formacao/telaatt.js";

export async function criarCartoes() {
    let sectionCartoes = document.getElementById('cartoes');
    sectionCartoes.innerHTML = '';

    const cartoes = await buscarCarotes();

    for (let i = 0; i < cartoes.length; i++) {
        let cartao = document.createElement('div');
        cartao.className = 'cartao';
        let h1 = document.createElement('h1');
        h1.textContent = cartoes[i].nome;
        let h3 = document.createElement('h3');
        h3.textContent = cartoes[i].valor;
        let imgTag = document.createElement('img');
        imgTag.src = cartoes[i].img;

        let div = document.createElement('div');
        div.style.display = 'flex';
        div.style.width = '100%';
        div.style.justifyContent = 'space-evenly'

        let button = document.createElement('button');
        button.className = 'button_card';
        button.textContent = 'EXCLUIR';
        button.addEventListener('click', ()=>{
            excluirCartoes(cartoes[i].id);
        });

        let buttonAtt = document.createElement('button');
        buttonAtt.className = 'button_card';
        buttonAtt.textContent = 'ATT';
        buttonAtt.addEventListener('click', ()=>{
            mostraTelaAtt(cartoes[i].id);
        });

        div.appendChild(button);
        div.appendChild(buttonAtt);

        cartao.appendChild(h1);
        cartao.appendChild(imgTag);
        cartao.appendChild(h3);
        cartao.appendChild(div);

        sectionCartoes.appendChild(cartao);
    }
    let cartaoAdd = document.createElement('button');
    cartaoAdd.className = 'cartao';
    cartaoAdd.textContent = '+';
    cartaoAdd.addEventListener('click', ()=>{
        mostraTelaCad();
    });
    sectionCartoes.appendChild(cartaoAdd);
}