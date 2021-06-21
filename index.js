const getButton = document.getElementById('getButton');
const nameSurname = document.getElementById('nameSurname');
const age = document.getElementById('age')
const linkedin = document.getElementById('linkedinUrl');
const github = document.getElementById('githubUrl');
const sifirlaBtn = document.getElementById('sifirla')


getButton.addEventListener('click', onclick)


function onclick() {
    
    linkedin.setAttribute("href", "https://www.linkedin.com/in/aatakanakman/")
    github.setAttribute("href", "https://github.com/aatakanakman")
    getButton.style.display = "none"
    nameSurname.textContent = "Ali Atakan AKMAN";
    age.textContent = 22
    
}




