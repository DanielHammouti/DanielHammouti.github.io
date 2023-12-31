window.onload = function () {
    const homeSection = document.getElementById("home");
    const header = document.querySelector("header");

    function centerHomeSection() {
        const windowHeight = window.innerHeight;
        const homeSectionHeight = homeSection.offsetHeight;
        const headerHeight = header.offsetHeight;

        const marginTop = (windowHeight - homeSectionHeight) / 2 + headerHeight;

        homeSection.style.marginTop = `${marginTop}px`;
    }

    function handleScroll() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 0) {
            homeSection.classList.add("scrolled");
            header.classList.add("sticky");
        } else {
            homeSection.classList.remove("scrolled");
            header.classList.remove("sticky");
        }
    }

    function smoothScroll(target) {
        const targetElement = document.querySelector(target);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 2 * header.offsetHeight,
                behavior: "smooth"
            });
        }
    }

    // Gestionnaire de clic pour les liens du header
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const target = this.getAttribute("href");
            smoothScroll(target);
            setTimeout(function(){
                smoothScroll(target);
            }, 50);
        });
    });

    // Centre la section home au chargement initial
    centerHomeSection();

    // Vérifie la position de défilement initiale
    handleScroll();

    // Active les styles CSS après le chargement initial.
    document.body.classList.add("loaded");

    // Utilise window.onresize pour recalculer la position de la section home lors du redimensionnement de la fenêtre.
    window.onresize = function () {
        centerHomeSection();
    };

    // Utiliser requestAnimationFrame pour une animation fluide au scroll
    window.addEventListener("scroll", function () {
        requestAnimationFrame(handleScroll);
    });

    // Empêcher le défilement abrupt au chargement de la page
    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 100);
};

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    document.querySelector('#project2').style.backgroundPosition = 'center ' + (-scrollPosition / 2) + 'px';
});

function showVideo() {
    var videoContainer = document.getElementById('video-container');
    videoContainer.style.display = 'block'; // Affiche la vidéo
    var video = document.getElementById('demo-video');
    video.play(); // Lance la lecture de la vidéo
}
function closeVideo() {
    var videoContainer = document.getElementById('video-container');
    videoContainer.style.display = 'none';
    var video = document.getElementById('demo-video');
    video.pause();
    video.currentTime = 0; // Remet la vidéo au début
}

document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez tous les éléments de classe "custom-heading"
    var headings = document.querySelectorAll('.custom-heading');

    // Ajoutez un gestionnaire d'événement de clic à chaque titre
    headings.forEach(function (heading) {
        heading.addEventListener('click', function () {
            // Sélectionnez le parent li de l'en-tête cliqué
            var listItem = heading.closest('.custom-list-item');

            // Ajoutez ou retirez la classe "expanded" pour basculer l'affichage du détail
            if (listItem.classList.contains('expanded')) {
                listItem.classList.remove('expanded');
            } else {
                document.querySelectorAll('.custom-list-item.expanded').forEach(function (item) {
                    item.classList.remove('expanded');
                });
                listItem.classList.add('expanded');
            }
        });
    });
});