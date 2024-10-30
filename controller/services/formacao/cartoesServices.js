import { criarCartoes } from "./../../../view/js/formacao/cartoesViews.js";

export async function buscarCarotes() {
    try {
        const response = await fetch('https://back-end-xi-rosy.vercel.app/');
        const data = await response.json();
        return data;
    }
    catch (e) {
        console.log(e);
    }
}

export async function excluirCartoes(index) {
    try {
        const response = await fetch('https://back-end-xi-rosy.vercel.app/cartoes', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cartao: index }),
        });
        criarCartoes();
    }
    catch (e) {
        console.log(e);
    }
}

export async function cadastrarCatao(nome, valor, link) {
    try {
        const response = await fetch('https://back-end-xi-rosy.vercel.app/cartoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                valor: valor,
                img: link,
            }),
        });
        criarCartoes();
    }
    catch (e) {
        console.log(e);
    }
}

export async function atualizarCartao(id, nome, valor, img) {
    try {
        const response = await fetch('https://back-end-xi-rosy.vercel.app/cartoes', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                valor: valor,
                img: img,
                id: id,
            }),
        });
        criarCartoes();
    } catch (e) {
        console.log(e);
    }
}