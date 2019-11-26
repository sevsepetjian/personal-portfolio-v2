function headerAppear() {
    const headerContainer = document.querySelector('.header__container');

    headerContainer.classList.add('header__appear');
}

window.addEventListener('load', headerAppear);

function projectsAppear() {
    const projects = document.querySelector('.projects');
    let projectsPosition = projects.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;
    
    if(projectsPosition < screenPosition) {
        projects.classList.add('projects__appear');
    }
}

window.addEventListener('scroll', projectsAppear);