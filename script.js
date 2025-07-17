// Configurar el canvas para el confeti
const canvas = document.getElementById('confettiCanvas');
const myConfetti = confetti.create(canvas, {
    resize: true,
    useWorker: true
});

// Definir la forma de corazón usando Path2D
const heartShape = confetti.shapeFromPath({
    path: 'M 0 200 C 0 150 50 100 100 100 C 150 100 200 150 200 200 C 200 250 150 300 100 300 C 50 300 0 250 0 200 Z',
    scale: 0.3
});

// Lanzar confeti de corazones al cargar la página
myConfetti({
    particleCount: 50,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#ff4040', '#ff69b4', '#800080'], // Colores ajustados al corazón
    shapes: [heartShape],
    scalar: 0.8
});

// Lanzar confeti de corazones cada 4 segundos (más lento para efecto dramático)
setInterval(() => {
    myConfetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ff4040', '#ff69b4', '#800080'],
        shapes: [heartShape]
    });
}, 4000);

// Lanzar confeti al hacer clic
canvas.addEventListener('click', () => {
    myConfetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff4040', '#ff69b4', '#800080'],
        shapes: [heartShape]
    });
});