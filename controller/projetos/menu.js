let menu = document.getElementById('menu');
let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');

export function trocarMenu(){
    if(menu.style.left === '0vw'){
        menu.style.left = '-100vw';

        div1.style.rotate = ('0deg');
        div1.style.position = ('relative');
        div1.style.top = ('0vh');

        div2.style.display = ('block');

        div3.style.rotate = ('-0deg');
        div3.style.top = ('0vh');
        div3.style.position = ('relative');
    }else{
        menu.style.left = '0vw';

        div1.style.rotate = ('45deg');
        div1.style.position = ('absolute');
        div1.style.top = ('3vh');

        div2.style.display = ('none');

        div3.style.rotate = ('-45deg');
        div3.style.top = ('3vh');
        div3.style.position = ('absolute');
    }
}
