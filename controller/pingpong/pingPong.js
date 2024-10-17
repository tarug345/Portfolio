document.addEventListener('DOMContentLoaded', () => {
    const raqueteDireita = document.getElementById('raqueteDois');
    const raqueteEsquerda = document.getElementById('raqueteUm');
    const bola = document.getElementById('bola');
    const gameArea = document.getElementById('gameArea');
    
    let raqueteDireitaPos = gameArea.clientHeight / 2 - raqueteDireita.clientHeight / 2;
    let raqueteEsquerdaPos = gameArea.clientHeight / 2 - raqueteEsquerda.clientHeight / 2;

    let bolaX = gameArea.clientWidth / 2 - bola.clientWidth / 2; // Posição inicial da bola (horizontal)
    let bolaY = gameArea.clientHeight / 2 - bola.clientHeight / 2; // Posição inicial da bola (vertical)
    let bolaVelX = 3; // Velocidade da bola no eixo X
    let bolaVelY = 3; // Velocidade da bola no eixo Y

    // Movimento das raquetes
    document.addEventListener("keydown", (event) => {
        if (event.key === 'ArrowUp') {
            raqueteDireitaPos = Math.max(0, raqueteDireitaPos - 20);
            raqueteDireita.style.top = raqueteDireitaPos + 'px';
        } else if (event.key === 'ArrowDown') {
            raqueteDireitaPos = Math.min(gameArea.clientHeight - raqueteDireita.clientHeight, raqueteDireitaPos + 20);
            raqueteDireita.style.top = raqueteDireitaPos + 'px';
        } else if (event.key === 'w') {
            raqueteEsquerdaPos = Math.max(0, raqueteEsquerdaPos - 20);
            raqueteEsquerda.style.top = raqueteEsquerdaPos + 'px';
        } else if (event.key === 's') {
            raqueteEsquerdaPos = Math.min(gameArea.clientHeight - raqueteEsquerda.clientHeight, raqueteEsquerdaPos + 20);
            raqueteEsquerda.style.top = raqueteEsquerdaPos + 'px';
        }
    });

    // Movimento da bola
    function moveBola() {
        bolaX += bolaVelX;
        bolaY += bolaVelY;

        // Colisão com o topo e a base do campo
        if (bolaY <= 0 || bolaY >= gameArea.clientHeight - bola.clientHeight) {
            bolaVelY *= -1; // Inverter direção vertical
        }

        // Colisão com as raquetes
        if (bolaX <= raqueteEsquerda.clientWidth && bolaY >= raqueteEsquerdaPos && bolaY <= raqueteEsquerdaPos + raqueteEsquerda.clientHeight) {
            bolaVelX *= -1; // Inverter direção horizontal
        } else if (bolaX >= gameArea.clientWidth - raqueteDireita.clientWidth - bola.clientWidth && bolaY >= raqueteDireitaPos && bolaY <= raqueteDireitaPos + raqueteDireita.clientHeight) {
            bolaVelX *= -1; // Inverter direção horizontal
        }

        // Verificar se a bola passou as raquetes (pontuação)
        if (bolaX <= 0 || bolaX >= gameArea.clientWidth - bola.clientWidth) {
            resetBola();
        }

        // Atualizar a posição visual da bola
        bola.style.left = bolaX + 'px';
        bola.style.top = bolaY + 'px';

        requestAnimationFrame(moveBola);
    }

    // Resetar a bola para a posição inicial
    function resetBola() {
        bolaX = gameArea.clientWidth / 2 - bola.clientWidth / 2;
        bolaY = gameArea.clientHeight / 2 - bola.clientHeight / 2;
        bolaVelX = 3 * (Math.random() > 0.5 ? 1 : -1); // Direção aleatória
        bolaVelY = 3 * (Math.random() > 0.5 ? 1 : -1);
    }

    // Iniciar o movimento da bola
    moveBola();
});
