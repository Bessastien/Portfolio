/**
 * TERMINAL LOADER ANIMATION
 * Animation de boot au chargement de la page
 */

// Configuration des lignes du terminal
const terminalLines = [
    { text: "> boot_system --user=sebastien_dabert", color: "#00ff88", delay: 500 },
    { text: "> initializing_modules...", color: "#00ccff", delay: 2 },
    { text: "> [OK] Java runtime loaded", color: "#00ff88", delay: 2 },
    { text: "> [OK] Python interpreter ready", color: "#00ff88", delay: 2 },
    { text: "> [OK] Creative_Mind module active", color: "#00ff88", delay: 2 },
    { text: "> [OK] SQL database connected", color: "#00ff88", delay: 2 },
    { text: "> launching_portfolio.exe...", color: "#00ccff", delay: 20 },
    { text: "> [SUCCESS] Welcome to Sébastien's Portfolio!", color: "#00ff88", delay: 150 }
];

// Variables d'état
let currentLine = 0;
let currentChar = 0;
let typingSpeed = 1; // Première ligne lente

// Éléments DOM
const terminalText = document.getElementById('terminal-text');
const terminalLoader = document.getElementById('terminal-loader');
const mainContent = document.getElementById('main-content');

/**
 * Fonction d'écriture avec effet machine à écrire
 */
function typeWriter() {
    if (currentLine < terminalLines.length) {
        const line = terminalLines[currentLine];

        if (currentChar === 0) {
            // Début d'une nouvelle ligne - créer un span coloré
            const lineSpan = document.createElement('span');
            lineSpan.style.color = line.color;
            lineSpan.style.textShadow = `0 0 10px ${line.color}`;
            lineSpan.dataset.lineIndex = currentLine;
            terminalText.appendChild(lineSpan);
        }

        if (currentChar < line.text.length) {
            // Ajouter le caractère suivant
            const lineSpan = terminalText.querySelector(`[data-line-index="${currentLine}"]`);
            lineSpan.textContent += line.text[currentChar];
            currentChar++;

            // Première ligne lente, les autres ultra-rapides
            const speed = currentLine === 0 ? typingSpeed : 2;
            const randomDelay = speed + Math.random() * 1;
            setTimeout(typeWriter, randomDelay);
        } else {
            // Ligne terminée, passer à la suivante
            terminalText.appendChild(document.createTextNode('\n'));
            currentLine++;
            currentChar = 0;

            if (currentLine < terminalLines.length) {
                setTimeout(typeWriter, terminalLines[currentLine - 1].delay);
            } else {
                // Animation terminée
                setTimeout(revealMainContent, 200);
            }
        }
    }
}

/**
 * Révéler le contenu principal après l'animation
 */
function revealMainContent() {
    // Effet de glitch avant disparition
    terminalLoader.style.animation = 'terminal-exit-glitch 0.2s ease-out';

    setTimeout(() => {
        terminalLoader.classList.add('slide-up');

        setTimeout(() => {
            mainContent.classList.remove('hidden');
            mainContent.classList.add('visible');

            // Faire apparaître le header
            setTimeout(() => {
                const header = document.getElementById('header');
                header.classList.add('visible');
            }, 100);

            // Initialiser l'effet parallaxe
            if (window.initParallax) {
                window.initParallax();
            }

            // Déclencher l'événement pour initialiser le carousel
            window.dispatchEvent(new Event('contentVisible'));

            // Supprimer le loader du DOM
            setTimeout(() => {
                terminalLoader.style.display = 'none';
            }, 300);
        }, 150);
    }, 150);
}

/**
 * Initialisation au chargement de la page
 */
function initTerminal() {
    // Créer l'effet matrix
    if (window.createMatrixEffect) {
        window.createMatrixEffect();
    }

    // Démarrer l'animation du terminal
    setTimeout(typeWriter, 50);
}

// Exposer la fonction globalement
window.initTerminal = initTerminal;

// Ajouter les animations CSS dynamiquement
const style = document.createElement('style');
style.textContent = `
    @keyframes terminal-exit-glitch {
        0% { transform: translate(0, 0); filter: hue-rotate(0deg) blur(0px); }
        20% { transform: translate(-5px, 5px); filter: hue-rotate(90deg) blur(1px); }
        40% { transform: translate(5px, -5px); filter: hue-rotate(-90deg) blur(2px); }
        60% { transform: translate(-3px, 3px); filter: hue-rotate(45deg) blur(1px); }
        80% { transform: translate(3px, -3px); filter: hue-rotate(-45deg) blur(0.5px); }
        100% { transform: translate(0, 0); filter: hue-rotate(0deg) blur(0px); }
    }
`;
document.head.appendChild(style);

