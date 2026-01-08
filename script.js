const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const waxSeal = document.getElementById('wax-seal');
const confettiContainer = document.getElementById('confetti-container');

envelope.addEventListener('click', () => {
    // Скрываем восковую печать
    waxSeal.style.opacity = '0';
    // Открываем клапан
    envelope.classList.add('open');
    // Показываем письмо и запускаем конфетти
    setTimeout(() => {
        letter.classList.add('show');
        startConfetti();
    }, 1000);
});

// Конфетти
function startConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        const size = 5 + Math.random() * 10;
        confetti.style.width = confetti.style.height = size + 'px';
        confetti.style.animationDuration = 2 + Math.random() * 3 + 's';
        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }

    setInterval(startConfetti, 4000);
}
