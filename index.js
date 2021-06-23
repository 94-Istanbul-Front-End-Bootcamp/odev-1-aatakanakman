const getButton = document.getElementById('getButton')
const nameSurname = document.getElementById('nameSurname');
const age = document.getElementById('age')
const linkedin = document.getElementById('linkedinUrl');
const github = document.getElementById('githubUrl');
const sifirlaBtn = document.getElementById('sifirla')
getButton.addEventListener('click', onclick)


//variables
const myName = "Ali Atakan"
const mySurname = "AKMAN"
const myAge = 22
const socialMedia = {
   linkedin : "https://www.linkedin.com/in/aatakanakman/",
   github : "https://github.com/aatakanakman"
}


function onclick() {

    //linkedin href attr
    var linkedinHref = document.createAttribute("href")
    linkedinHref.value = socialMedia.linkedin
    linkedin.setAttributeNode(linkedinHref)
    //github href attr    
    var githubHref = document.createAttribute("href")
    githubHref.value = socialMedia.github
    github.setAttributeNode(githubHref)

    //name, surname and age
    nameSurname.textContent = `${myName} ${mySurname}`;
    age.textContent = myAge

    getButton.style.display = "none"
}




