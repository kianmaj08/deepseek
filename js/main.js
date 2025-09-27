// Haupt-JavaScript für die Website

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Schließe das Menü, wenn auf einen Link geklickt wird
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }
    
    // Lade Karten-Daten
    loadCards();
});

// Funktion zum Laden der Karten-Daten
async function loadCards() {
    try {
        const response = await fetch('data/cards.json');
        const cards = await response.json();
        displayCards(cards);
    } catch (error) {
        console.error('Fehler beim Laden der Karten:', error);
    }
}

// Funktion zum Anzeigen der Karten
function displayCards(cards) {
    const container = document.getElementById('cards-container');
    
    if (!container) return; // Nur auf Seiten mit cards-container ausführen
    
    container.innerHTML = '';
    
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <h3>${card.title}</h3>
            <p>${card.description}</p>
            ${card.link ? `<a href="${card.link}" class="card-btn">Mehr erfahren</a>` : ''}
        `;
        container.appendChild(cardElement);
    });
}
