// ======================
// NAME TYPING ANIMATION
// ======================

const nameText = "Fendy Ramadhani";
let nameIndex = 0;
let deletingName = false;
const typingSpeed = 120;
const deletingSpeed = 80;
const pauseAfterTyping = 1500;
const pauseAfterDeleting = 800;

function animateName(){
  const nameElement = document.querySelector(".name");
  if(!nameElement) return;
  if(!deletingName){
    nameElement.innerHTML = nameText.substring(0, nameIndex + 1);
    nameIndex++;
    if(nameIndex === nameText.length){
      deletingName = true;
      setTimeout(animateName, pauseAfterTyping);
      return;
    }
    setTimeout(animateName, typingSpeed);
  } else {
    nameElement.innerHTML = nameText.substring(0, nameIndex - 1);
    nameIndex--;
    if(nameIndex === 0){
      deletingName = false;
      setTimeout(animateName, pauseAfterDeleting);
      return;
    }
    setTimeout(animateName, deletingSpeed);
  }
}
document.addEventListener("DOMContentLoaded", animateName);


// ======================
// ROLE TEXT CHANGE
// ======================

const roles = ["AI Engineer", "Cloud Engineer", "Automation Builder"];
let roleIndex = 0;

function changeRole(){
  const roleElement = document.querySelector(".role");
  if(!roleElement) return;
  roleElement.innerHTML = roles[roleIndex];
  roleIndex++;
  if(roleIndex >= roles.length) roleIndex = 0;
}
setInterval(changeRole, 2500);


// ======================
// FLOATING IMAGE
// ======================

const floatImage = document.querySelector(".hero-image img");
if(floatImage){
  let position = 0;
  setInterval(() => {
    position += 0.05;
    floatImage.style.transform = `translateY(${Math.sin(position) * 12}px)`;
  }, 30);
}


// ======================
// CURSOR GLOW
// ======================

const cursor = document.createElement("div");
cursor.classList.add("cursor-glow");
document.body.appendChild(cursor);
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});


// ======================
// SCROLL REVEAL — untuk .reveal-up (tech cards, footer, section title)
// ======================

function checkReveal(){
  document.querySelectorAll(".reveal-up:not(.visible)").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 80){
      el.classList.add("visible");
      // Setelah card muncul, jalankan skill bar di dalam card itu
      el.querySelectorAll(".skill-progress").forEach(bar => {
        bar.style.width = bar.getAttribute("data-skill") + "%";
      });
    }
  });
}

window.addEventListener("scroll", checkReveal);
window.addEventListener("load", checkReveal);


// ======================
// PARTICLE BACKGROUND
// ======================

if(typeof tsParticles !== "undefined"){
  tsParticles.load("particles-js", {
    particles: {
      number: { value: 60 },
      color: { value: "#60a5fa" },
      links: { enable: true, color: "#60a5fa" },
      move: { enable: true, speed: 1 }
    },
    background: { color: "transparent" }
  });
}


// ======================
// 3D TILT EFFECT
// ======================

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tech-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = (y - rect.height / 2) / 8;
      const rotateY = (rect.width / 2 - x) / 8;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0)";
    });
  });
});


// ======================
// NAVBAR INDICATOR — FIXED & ROBUST
// ======================

document.addEventListener("DOMContentLoaded", () => {
  const indicator = document.querySelector(".nav-indicator");
  const links     = document.querySelectorAll(".nav-menu a");

  if(!indicator || links.length === 0) return;

  const navContainer =
    document.querySelector(".nav-wrapper") ||
    document.querySelector(".nav-menu");

  function moveIndicator(el) {
    const containerRect = navContainer.getBoundingClientRect();
    const linkRect      = el.getBoundingClientRect();
    indicator.style.width = linkRect.width + "px";
    indicator.style.left  = (linkRect.left - containerRect.left) + "px";
  }

  links.forEach(link => {
    link.addEventListener("mouseenter", () => moveIndicator(link));
  });

  navContainer.addEventListener("mouseleave", () => {
    const active = document.querySelector(".nav-menu a.active");
    if(active) moveIndicator(active);
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      moveIndicator(link);
    });
  });

  // Auto-detect halaman aktif dari URL
  const currentPage = window.location.pathname.split("/").pop() || "home.html";
  links.forEach(link => {
    if(link.getAttribute("href") === currentPage){
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });

  const activeLink = document.querySelector(".nav-menu a.active");
  if(activeLink) setTimeout(() => moveIndicator(activeLink), 50);
});
