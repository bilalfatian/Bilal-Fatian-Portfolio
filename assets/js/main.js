/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })

}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })     
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})
/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollup(){
    const scrollup = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})   


/*==================== SWICH LANGUAGES ====================*/

const languageContent = {
    "en": {
        "home": "Home",
        "about": "About",
        "skills": "Skills",
        "education-nav": "Education",
        "projects": "Projects",
        "contact": "Contact",
        "field": "Data Science Student",
        "profession": "> Future Data Scientist 👨‍🔧",
        "resume": '<a download="" href="assets/pdf/Bilal_Fatian_Resume_en.pdf" target="_blank" class="button button--flex">Resume<i class="uil uil-file-download-alt button__icon"></i></a>',
        "scroll": "Scroll down",
        "about-me": "About Me",
        "about-me-content": "« Every bit of data tells a story; it's up to us to read it. »<br><br>This philosophy ignites my passion for delving into the realms of data and AI. With a foundation in applied mathematics and pursuing a master's degree in machine learning for data science, I thrive on unraveling the stories concealed within datasets. Proficient in Python, R, and SQL, I specialize in machine learning, data analysis, and visualization. My commitment lies in harnessing these skills to confront intricate problems and derive actionable insights.<br><br>If you are seeking a dedicated data scientist passionate about leveraging data's power, let's connect and explore how we can make a difference together, one problem at a time.",
        "skills-content": "Skills",
        "programming-languages": "Programming Languages",
        "data-ML": "Data & Machine Learning",
        "databases": "Databases",
        "web-development": "Web Development",
        "qualification": "Qualifications",
        "education-qualif": "Education",
        "experience": "Experience",
        "qualification-2-title": "MS. Maching Leaning for Data Science",
        "university-2": "Paris Cité University",
        "qualification-1-title": "Bachelor in Data Science",
        "university-1": "Mohammed VI Polytechnic University (UM6P), Benguerir",
        "qualifiation-1-skills": "<strong>Skills:</strong> Calculus · Probability · Statistics · Linear Algebra · Programming · Data Collection · Data Cleaning · Data Exploration · Statistical Modeling · Machine Learning · Deep Learning · Data visualization ",
        "qualification-0-title": "High school diploma in Mathematical Sciences",
        "high-school": "Mohammed VI High School of Excellence, Benguerir",
        "project-1": "End of Studies Bachelor Internship Project",
        "project-1-entity": "Moroccan Office of Phosphates. (OCP Group) · Benguerir, Morocco · On-site",
        "project-1-date": "Apr 2024 -> Jul 2024",
        "project-1-desc": "• Creating a predictive model for the MTBR (Mean Time Between Repairs) of the phosphate production line within OCP Safi.<br><br>• Developing an interactive Power BI dashboard to visualize various parameters across different departments at OCP Safi.",
        "projects-github": "Projects",
        "data-ml-projects": "Data & ML Projects",
        "data-ml-projects-1-title": "Scraping Jobs on LinkedIn & Indeed",
        "data-ml-projects-1-desc": "Find best job offers for you by web scrapping.",
        "data-ml-projects-2-title": "Emergency Message Classifier",
        "data-ml-projects-2-desc": "ETL & ML classify emergency messages into 36 categories via a web app, aiding disaster response.",
        "data-ml-projects-3-title": "Handwritten Digit Recognition",
        "data-ml-projects-3-desc": "Develop and compare three different neural network models for handwritten digit recognition.",
        //"data-ml-projects-4-title": "Reservation System with Tkinter",
        //"data-ml-projects-4-desc": "Management Application for an Agency Specializing in Vacation Home Rentals",
        "data-ml-projects-5-title":"Urban Sounds Classifier",
        "data-ml-projects-5-desc":"This project implements CNNs for sound event recognition, exploring MFCCs, Log-MEL Spectrograms, and data augmentation techniques.",
        "data-ml-projects-6-title":"Analysis of Amazon's Closing Price Time Series",
        "data-ml-projects-6-desc":"This project delves into ARIMA and SARIMA models to analyse and predict Amazon's closing prices.",
        "data-ml-projects-7-title":"Chicago Crime Data Analysis",
        "data-ml-projects-7-desc":"Explore Chicago crime trends visually using Power Bi and Python libraries. Check out the interactive dashboard!",
        "data-ml-projects-8-title":"FrozenLake Explorer",
        "data-ml-projects-8-desc":"Navigating FrozenLake using Q-learning algorithm for optimal policy",
        "web-projects":"Web Projects",
        "web-projects-1-desc": "Web platform designed for book enthusiasts to discover, share, and enjoy a wide range of literary works.",
        "web-projects-2-desc": "Charity Web App",
        "get-in-touch": "Get In Touch",
        "thank-you": "Thank you for visiting my portfolio 🙏🏼 ! Feel free to contact me.",
        "location": "Location",
        "location-": "Tetouan, Morocco",
        "name": "Name",
        "send": "Send Message"
    },
    "fr": {
        "home": "Accueil",
        "about": "À propos",
        "skills": "Compétences",
        "education-nav": "Formation",
        "projects": "Projets",
        "contact": "Contact",
        "field": "Étudiant en science des données",
        "profession": "> Futur Data Scientist 👨‍🔧",
        "resume": '<a download="" href="assets/pdf/Bilal_Fatian_Resume_fr.pdf" target="_blank" class="button button--flex">CV<i class="uil uil-file-download-alt button__icon"></i></a>',
        "scroll": "Descendre",
        "about-me": "À propos de moi",
        "about-me-content": "« Chaque parcelle de données raconte une histoire ; il nous appartient de la lire. » <br><br>Cette philosophie alimente ma passion pour explorer les domaines des données et de l'IA. Fort d'une formation en mathématiques appliquées et poursuivant un master en apprentissage machine pour la science des données, je m'épanouis dans la découverte des histoires cachées au sein des ensembles de données. Maîtrisant Python, R et SQL, je me spécialise dans l'apprentissage automatique, l'analyse de données et la visualisation. Mon engagement réside dans l'utilisation de ces compétences pour résoudre des problèmes complexes et en tirer des insights concrets. <br><br>Si vous recherchez un data scientist dévoué passionné par l'exploitation du pouvoir des données, faisons connaissance et explorons comment nous pouvons faire la différence ensemble, problème après problème.",
        "skills-content": "Compétences",
        "programming-languages": "Langages de programmation",
        "data-ML": "Données et apprentissage automatique",
        "databases": "Bases de données",
        "web-development": "Développement Web",
        "qualification": "Qualifications",
        "education-qualif": "Éducation",
        "experience": "Expérience",
        "qualification-2-title": "Master en Apprentissage Machine pour la Sciences des Données",
        "university-2": "Université Paris Cité",
        "qualification-1-title": "Licence en Science des Données",
        "university-1": "Université Mohammed VI Polytechnique (UM6P), Benguerir",
        "qualifiation-1-skills": "<strong>Compétences:</strong> Calcul différentiel et intégral · Probabilités · Statistiques · Algèbre linéaire · Programmation · Collecte de données · Nettoyage de données · Exploration de données · Modélisation statistique · Apprentissage automatique · Apprentissage profond · Visualisation de données",
        "qualification-0-title": "Bac Sciences Mathématiques B",
        "high-school": "Lycée Mohammed VI d'Excellence, Benguerir",
        "project-1": "Projet de Fin d'Etude (PFE)",
        "project-1-entity": "Office Chérifien des Phosphates (OCP Group) · Benguerir, Maroc · Sur site",
        "project-1-date": "Avr 2024 -> Juil 2024",
        "project-1-desc": "• Création d'un modèle prédictif pour le MTBF (Mean Time Between Failures) de la ligne de production de phosphate au sein d'OCP Safi.<br><br>• Développement d'un tableau de bord interactif Power BI pour visualiser divers paramètres à travers différents départements chez OCP Safi.",
        "projects-github": "Projets",
        "data-ml-projects": "Données & d'apprentissage automatique",
        "data-ml-projects-1-title": "Scraping d'Offres d'Emploi sur LinkedIn & Indeed",
        "data-ml-projects-1-desc": "Trouvez les meilleures offres d'emploi pour vous en effectuant du web scraping.",
        "data-ml-projects-2-title": "Classificateur de Messages d'Urgence",
        "data-ml-projects-2-desc": "ETL & ML classifient les messages d'urgence en 36 catégories via une application web, aidant ainsi la gestion des catastrophes.",
        "data-ml-projects-3-title": "Reconnaissance de Chiffres Manuscrits",
        "data-ml-projects-3-desc": "Développez et comparez trois modèles de réseaux neuronaux différents pour la reconnaissance de chiffres manuscrits.",
        //"data-ml-projects-4-title": "Système de Réservation avec Tkinter",
        //"data-ml-projects-4-desc": "Application de Gestion pour une Agence Spécialisée dans la Location de Maisons de Vacances.",
        "data-ml-projects-5-title":"Classificateur de Sons Urbains",
        "data-ml-projects-5-desc":"Ce projet met en œuvre des CNN pour la reconnaissance d'événements sonores, explorant les MFCC, les Log-MEL Spectrograms et les techniques d'augmentation de données pour une précision accrue.",
        "data-ml-projects-6-title":"Analyse de Séries Temporelles des prix de clôture d'Amazon",
        "data-ml-projects-6-desc":"Ce projet explore les modèles ARIMA et SARIMA pour analyser et prédire les prix de clôture d'Amazon.",
        "data-ml-projects-7-title":"Analyse des données sur la criminalité à Chicago",
        "data-ml-projects-7-desc":"Explorez les tendances criminelles de Chicago visuellement avec Power Bi et les bibliothèques Python. Découvrez le tableau de bord interactives !",
        "data-ml-projects-8-title":"Explorateur du Lac Gelé",
        "data-ml-projects-8-desc":"Navigation dans le Lac Gelé avec Q-Learning pour une politique optimale.",
        "web-projects": "Projets Web",
        "web-projects-1-desc": "Plateforme Web conçue pour les passionnés de livres afin de découvrir, partager et apprécier une large gamme d'œuvres littéraires.",
        "web-projects-2-desc": "Application Web de bienfaisance",
        "get-in-touch": "Contact",
        "thank-you": "Merci d'avoir visité mon portfolio 🙏🏼 ! N'hésitez pas à me contacter.",
        "location": "Adresse",
        "location-": "Tétouan, Maroc",
        "name": "Nom",
        "send": "Envoyer le message"
    },
  };

function switchLang(lang) {
    
    for (let key in languageContent[lang]) {
        document.getElementById(key).innerHTML = languageContent[lang][key];
    }

}