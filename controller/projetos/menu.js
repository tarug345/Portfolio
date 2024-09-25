let menu = document.getElementById('menu');
let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');

export function trocarMenu(){
    if(menu.style.left === '0vw'){
        menu.style.left = '-100vw';
    }else{
        menu.style.left = '0vw';

        div1.style.rotate = ('45deg');
        div1.style.position = ('absolute');
        div1.style.top = ('3vh');
    }
}
