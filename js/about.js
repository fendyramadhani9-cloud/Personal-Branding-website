// scroll animation

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});


const hiddenElements = document.querySelectorAll(
".about-container, .edu-box, .exp-card, .skill"
);

hiddenElements.forEach(el => observer.observe(el));



// hover glow skill

const skills = document.querySelectorAll(".skill");

skills.forEach(skill => {

skill.addEventListener("mousemove", e => {

skill.style.transform = "scale(1.05)";

});

skill.addEventListener("mouseleave", e => {

skill.style.transform = "scale(1)";

});

});
const words = [
"Cloud Engineer",
"AI Developer",
"IoT Builder"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

const typingElement = document.getElementById("typing");

function type(){

currentWord = words[wordIndex];

if(isDeleting){
charIndex--;
}else{
charIndex++;
}

typingElement.textContent = currentWord.substring(0,charIndex);

if(!isDeleting && charIndex === currentWord.length){

setTimeout(()=>{
isDeleting = true;
},1200);

}

else if(isDeleting && charIndex === 0){

isDeleting = false;

wordIndex++;

if(wordIndex === words.length){
wordIndex = 0;
}

}

setTimeout(type,isDeleting ? 60 : 120);

}

type();
