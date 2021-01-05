function openNav(){
    document.getElementsByTagName('nav')[0].classList.remove('nav-transition-out');
    document.getElementsByTagName('nav')[0].classList.add('nav-transition-in');
    document.getElementsByClassName('close-menu')[0].style.display = 'flex';
}

function hideNav(){
    document.getElementsByTagName('nav')[0].classList.remove('nav-transition-in');
    document.getElementsByTagName('nav')[0].classList.add('nav-transition-out');
    document.getElementsByClassName('close-menu')[0].style.display = 'none';
}

function showCompletedProjects(){
   document.getElementById('completed-projects').classList.add('active-projects-nav');
   document.getElementById('all-projects').classList.remove('active-projects-nav');
   document.getElementById('inprogress-projects').classList.remove('active-projects-nav');

   for (let element of document.getElementsByClassName("in-progress")){
    element.style.display="none";
 }

 for (let element of document.getElementsByClassName("completed")){
    element.style.display="block";
 }
}

function showAllProjects(){
    document.getElementById('all-projects').classList.add('active-projects-nav');
    document.getElementById('completed-projects').classList.remove('active-projects-nav');
    document.getElementById('inprogress-projects').classList.remove('active-projects-nav');

    for (let element of document.getElementsByClassName("project-block")){
        element.style.display="block";
     }
}

function showInprogressProjects(){
    document.getElementById('all-projects').classList.remove('active-projects-nav');
    document.getElementById('completed-projects').classList.remove('active-projects-nav');
    document.getElementById('inprogress-projects').classList.add('active-projects-nav');

    for (let element of document.getElementsByClassName("completed")){
        element.style.display="none";
     }
     for (let element of document.getElementsByClassName("in-progress")){
        element.style.display="block";
     }
}