// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        if (name && email && message) {
            // Show success message
            alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
            this.reset();
        } else {
            alert('Veuillez remplir tous les champs obligatoires.');
        }
    });
}

// Add scroll effect to navbar
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Animate service cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Add hover effect to service cards is handled by CSS

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Service details data
const serviceDetails = {
    devoirs: {
        title: "Aide aux devoirs",
        description: "Je propose un accompagnement personnalisé pour aider votre enfant dans ses devoirs quotidiens. Cette aide permet de consolider les apprentissages, de développer l'autonomie et de réduire le stress lié aux devoirs à la maison.",
        details: [
            "Accompagnement individuel ou en petit groupe",
            "Méthodologie de travail adaptée",
            "Explication des leçons non comprises",
            "Préparation des interrogations",
            "Suivi régulier des progrès"
        ]
    },
    niveau: {
        title: "Mise à niveau",
        description: "Pour les élèves qui ont accumulé des lacunes, je propose un programme de mise à niveau personnalisé. L'objectif est de consolider les bases fondamentales pour permettre à l'élève de suivre avec confiance le programme scolaire.",
        details: [
            "Bilan des compétences",
            "Programme de rattrapage adapté",
            "Exercices progressifs",
            "Renforcement des bases",
            "Suivi personnalisé"
        ]
    },
    examens: {
        title: "Préparation aux examens",
        description: "Préparation complète pour les examens importants comme le CEB et le CE1D. Je travaille avec l'élève sur les matières clés, les techniques de réponse et la gestion du stress le jour de l'examen.",
        details: [
            "Révision des matières principales",
            "Exercices types d'examens",
            "Techniques de gestion du temps",
            "Stratégies de réponse",
            "Simulation d'examens"
        ]
    },
    apprentissage: {
        title: "Stratégies d'apprentissage",
        description: "Chaque enfant a sa propre façon d'apprendre. J'identifie le profil d'apprentissage de votre enfant et lui enseigne des méthodes de travail efficaces adaptées à sa personnalité.",
        details: [
            "Identification du profil d'apprentissage",
            "Méthodes visuelles, auditives ou kinesthésiques",
            "Techniques de mémorisation",
            "Organisation du travail",
            "Gestion du temps"
        ]
    },
    etude: {
        title: "Stratégie d'étude",
        description: "L'apprentissage des bonnes méthodes d'étude est essentiel pour la réussite scolaire. J'accompagne votre enfant dans l'acquisition de techniques d'étude efficaces et durables.",
        details: [
            "Planification des sessions d'étude",
            "Techniques de prise de notes",
            "Méthodes de révision active",
            "Création de fiches de révision",
            "Préparation des contrôles"
        ]
    },
    decrochage: {
        title: "Décrochage scolaire",
        description: "Face au décrochage scolaire, il est important de remobiliser l'élève et de restaurer sa confiance. Je travaille avec l'enfant pour redonner du sens à l'école et retrouver la motivation d'apprendre.",
        details: [
            "Identification des causes du décrochage",
            "Restauration de la confiance en soi",
            "Redécouverte du plaisir d'apprendre",
            "Objectifs progressifs et réalisables",
            "Suivi personnalisé et encouragement"
        ]
    },
    stress: {
        title: "Gestion du stress",
        description: "Le stress scolaire peut affecter les performances et le bien-être de l'enfant. J'enseigne des techniques de gestion du stress et de relaxation adaptées aux élèves.",
        details: [
            "Techniques de respiration",
            "Exercices de relaxation",
            "Gestion de l'anxiété avant les examens",
            "Positive thinking",
            "Équilibre vie scolaire/vie personnelle"
        ]
    },
    confiance: {
        title: "Confiance en soi",
        description: "La confiance en soi est un facteur clé de la réussite scolaire. J'aide votre enfant à développer une estime de soi saine et solide pour aborder les défis scolaires avec sérénité.",
        details: [
            "Renforcement de l'estime de soi",
            "Valorisation des réussites",
            "Transformation des échecs en opportunités",
            "Développement de la pensée positive",
            "Affirmation de soi"
        ]
    },
    harcelement: {
        title: "Harcèlement scolaire",
        description: "Le harcèlement scolaire est une situation grave qui nécessite un accompagnement adapté. Je soutiens les enfants victimes de harcèlement et les aide à retrouver leur bien-être et leur confiance.",
        details: [
            "Écoute et soutien émotionnel",
            "Stratégies de protection",
            "Restauration de la confiance",
            "Collaboration avec l'école si nécessaire",
            "Suivi personnalisé"
        ]
    },
    relationnel: {
        title: "Problèmes relationnels",
        description: "Les difficultés relationnelles avec les camarades ou les enseignants peuvent impacter la scolarité. J'aide l'enfant à développer des compétences sociales et à gérer les conflits de manière constructive.",
        details: [
            "Développement des compétences sociales",
            "Gestion des conflits",
            "Communication assertive",
            "Compréhension des relations",
            "Amélioration de l'intégration"
        ]
    },
    phobie: {
        title: "Phobie scolaire",
        description: "La phobie scolaire est un trouble anxieux sérieux qui empêche l'enfant d'aller à l'école. J'accompagne l'enfant et sa famille pour surmonter cette phobie progressivement.",
        details: [
            "Compréhension de la phobie",
            "Désensibilisation progressive",
            "Techniques de gestion de l'anxiété",
            "Collaboration avec les professionnels de santé",
            "Retour progressif à l'école"
        ]
    },
    rentree: {
        title: "Préparation rentrée",
        description: "La rentrée scolaire peut être source d'anxiété. Je propose une préparation complète pour aider votre enfant à aborder la nouvelle année scolaire sereinement et avec confiance.",
        details: [
            "Révision des bases de l'année précédente",
            "Organisation du matériel scolaire",
            "Mise en place d'une routine",
            "Préparation mentale",
            "Objectifs pour la nouvelle année"
        ]
    },
    changement: {
        title: "Changement d'école",
        description: "Un changement d'école ou de classe peut être déstabilisant. J'accompagne votre enfant dans cette transition pour l'aider à s'adapter à son nouvel environnement et à s'intégrer harmonieusement.",
        details: [
            "Préparation au changement",
            "Gestion de l'anxiété",
            "Techniques d'intégration",
            "Adaptation aux nouvelles méthodes",
            "Suivi de l'intégration"
        ]
    }
};

// Modal functions
function openModal(card) {
    const serviceKey = card.getAttribute('data-service');
    const service = serviceDetails[serviceKey];
    
    if (!service) return;
    
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalDetails = document.getElementById('modalDetails');
    const modalIcon = document.querySelector('.modal-icon');
    
    // Get the image from the card
    const cardImage = card.querySelector('.service-icon img');
    if (cardImage) {
        modalIcon.innerHTML = `<img src="${cardImage.src}" alt="${service.title}">`;
    }
    
    modalTitle.textContent = service.title;
    modalDescription.textContent = service.description;
    
    modalDetails.innerHTML = service.details.map(detail => `<li>${detail}</li>`).join('');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('serviceModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Close modal button
document.querySelector('.modal-close').addEventListener('click', closeModal);
