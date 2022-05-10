window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
    showNavOnScroll();
    showBackToTopButtonOnScroll();
    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section){
    const targetLine = scrollY + innerHeight / 2;

    //verificar se a seção passou da linha alvo:
    //quais dados eu vou precisar?
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
    console.log('O topo da seção passou do topo ou da linha alvo?', sectionTopReachOrPassedTargetLine)

    // verificar se a seção está abaixo da linha alvo:
    //quais dados eu vou precisar?
    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndAndTargetLine = sectionEndsAt <= targetLine;
    console.log('O fundo da seção passou da linha alvo?', sectionEndAndTargetLine)

    //limites da seção:
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndAndTargetLine;

    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
    
    menuElement.classList.remove('active');
    if(sectionBoundaries) {
        menuElement.classList.add('active');
    }
}

function showNavOnScroll() {
    if(scrollY > 0) {
        navigation.classList.add('scroll');
    } else {
        navigation.classList.remove('scroll');
    }
}

function showBackToTopButtonOnScroll() {
    if(scrollY > 500) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content,
    #contact,
    footer
    `);