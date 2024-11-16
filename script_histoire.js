// script_histoire.js

// Fonction pour faire apparaître les événements de la timeline progressivement
function revealTimelineEvents() {
    const events = document.querySelectorAll('.timeline-event');
    events.forEach((event, index) => {
        setTimeout(() => {
            event.style.opacity = 1;
            event.style.transform = 'translateY(0)';
        }, index * 300); // Délai progressif pour chaque événement
    });
}

// Génération des étoiles en arrière-plan
function generateStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars-container';
    document.body.appendChild(starsContainer);

    const numberOfStars = 50; // Ajuster pour l'effet désiré

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 1.5 + 0.5;
        const opacity = Math.random() * 0.5 + 0.3;

        star.style.cssText = `
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            opacity: ${opacity};
            animation: starTwinkle ${Math.random() * 3 + 2}s ease-in-out infinite;
        `;

        starsContainer.appendChild(star);
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    generateStars();
    revealTimelineEvents();
});
