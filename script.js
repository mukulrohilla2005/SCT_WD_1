console.log("MOOVY Loaded");

/* NAVBAR SCROLL EFFECT */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

/* NAV ACTIVE EFFECT */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.style.color = "white";
        });

        link.style.color = "red";

    });

});

/* FAQ */

const questions = document.querySelectorAll(".ques");

questions.forEach((question) => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;
        const icon = question.querySelector(".icon");

        document.querySelectorAll(".answer").forEach((item) => {

            if(item !== answer){
                item.style.display = "none";
            }

        });

        document.querySelectorAll(".icon").forEach((item) => {

            if(item !== icon){
                item.innerHTML = "+";
            }

        });

        if(answer.style.display === "block"){

            answer.style.display = "none";
            icon.innerHTML = "+";

        }else{

            answer.style.display = "block";
            icon.innerHTML = "×";

        }

    });

});

/* EMAIL VALIDATION */

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();

    if(email === ""){

        alert("Please enter your email");

    }
    else if(!email.includes("@")){

        alert("Please enter a valid email");

    }
    else{

        alert("Welcome to MOOVY!");
        emailInput.value = "";

    }

});

/* SECOND EMAIL */

const startBtn2 = document.getElementById("startBtn2");

startBtn2.addEventListener("click", () => {

    const email2 = document.getElementById("email2").value.trim();

    if(email2 === ""){

        alert("Please enter your email");

    }
    else if(!email2.includes("@")){

        alert("Please enter a valid email");

    }
    else{

        alert("Welcome to MOOVY!");

        document.getElementById("email2").value = "";

    }

});

/* ENTER KEY SUPPORT */

const emailField = document.getElementById("email");

emailField.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){

        startBtn.click();

    }

});

/* CARD HOVER EFFECT */

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "scale(1.06)";
        card.style.transition = "0.3s ease";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "scale(1)";

    });

});

/* AUTO SCROLL TRENDING */

const trending = document.querySelector(".trending");

let scrollAmount = 0;

function autoScroll(){

    scrollAmount += 1;

    trending.scrollLeft = scrollAmount;

    if(
        scrollAmount >=
        trending.scrollWidth -
        trending.clientWidth
    ){

        scrollAmount = 0;

    }

}

setInterval(autoScroll, 25);

/* DYNAMIC GREETING */

const hero = document.querySelector(".hero");

const greeting = document.createElement("p");

const hour = new Date().getHours();

if(hour < 12){

    greeting.innerHTML = "Good Morning 👋";

}
else if(hour < 18){

    greeting.innerHTML = "Good Afternoon 🍿";

}
else{

    greeting.innerHTML = "Good Evening 🎬";

}

greeting.style.fontSize = "18px";
greeting.style.opacity = "0.8";

hero.prepend(greeting);

/* PAGE LOADER */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";
document.body.style.transition = "opacity 1s ease";

/* SCROLL TO TOP */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "red";
topBtn.style.color = "white";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

/* BACKGROUND CHANGER */

const backgrounds = [
    "assets/background.webp",
    "assets/bg2.webp",
    "assets/bg3.webp"
];

let bgIndex = 0;

setInterval(() => {

    bgIndex++;

    if(bgIndex >= backgrounds.length){

        bgIndex = 0;

    }

    document.querySelector(".main").style.backgroundImage =
    `url('${backgrounds[bgIndex]}')`;

}, 8000);