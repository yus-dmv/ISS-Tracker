// Initialisation des icônes Lucide
lucide.createIcons();

// Génération des étoiles
function generateStars() {
    const starsContainer = document.getElementById('starsContainer');
    const numberOfStars = 50; // Réduit pour un effet plus subtil

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 1.5 + 0.5; // Étoiles plus petites
        const opacity = Math.random() * 0.5 + 0.3; // Opacité réduite

        star.style.cssText = `
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            opacity: ${opacity};
            --opacity: ${opacity};
            animation: starTwinkle ${Math.random() * 3 + 2}s ease-in-out infinite;
        `;

        starsContainer.appendChild(star);
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Initialisation des icônes Lucide
    lucide.createIcons();
    generateStars(); // Génération des étoiles si nécessaire
});
