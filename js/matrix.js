/**
 * EFFET MATRIX BACKGROUND
 * Caractères qui tombent en arrière-plan du terminal
 */

/**
 * Créer l'effet Matrix avec des caractères qui tombent
 */
function createMatrixEffect() {
    const matrixBg = document.getElementById('matrix-bg');
    if (!matrixBg) return;

    const chars = '01アイウエオカキクケコサシスセソタチツテト';

    // Créer des colonnes de caractères qui tombent
    for (let i = 0; i < 15; i++) {
        const column = document.createElement('div');
        column.style.position = 'absolute';
        column.style.left = `${Math.random() * 100}%`;
        column.style.top = `-20px`;
        column.style.color = '#00ff88';
        column.style.fontSize = '14px';
        column.style.fontFamily = 'monospace';
        column.style.opacity = '0.3';
        column.style.animation = `matrix-fall ${3 + Math.random() * 5}s linear infinite`;
        column.style.animationDelay = `${Math.random() * 3}s`;
        column.textContent = chars[Math.floor(Math.random() * chars.length)];

        matrixBg.appendChild(column);
    }
}

// Exposer la fonction globalement
window.createMatrixEffect = createMatrixEffect;

// Ajouter l'animation CSS pour la chute des caractères
const matrixStyle = document.createElement('style');
matrixStyle.textContent = `
    @keyframes matrix-fall {
        0% {
            transform: translateY(-20px);
            opacity: 0;
        }
        10% {
            opacity: 0.3;
        }
        90% {
            opacity: 0.3;
        }
        100% {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(matrixStyle);

