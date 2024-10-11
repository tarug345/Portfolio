let telaCad = document.getElementById('telaCadastro');

export function esconderTelaCad() {
    telaCad.style.display = '-100vw';
}
export function mostrarTelaCad() {
    telaCad.style.left = '0';
}
export function recolheDados() {
    let nome = document.getElementsById('nome')[0].value;
    let valor = document.getElementsById('valor')[1].value;
    let link = document.getElementsById('link')[2].value;
 
    cadastrarCartao(nome.value, valor.value, link.value);
    esconderTelaCad();

    nome.value = '';
    valor.value = '';
    link.value = '';
}