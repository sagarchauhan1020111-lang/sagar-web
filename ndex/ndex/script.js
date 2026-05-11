// SLIDER

const slider = document.getElementById("slider");

const title = document.getElementById("anime-title");

const desc = document.getElementById("anime-desc");

const animeData = [

{
    image:"solo2.jfif",
    title:"Solo Leveling",
    desc:"Experience the journey of the weakest hunter becoming the strongest."
},

{
    image:"26035.jpg",
    title:"One Piece",
    desc:"Join Luffy and his crew in the search for the legendary treasure."
},

{
    image:"download.jfif",
    title:"Attack On Titan",
    desc:"Humanity fights for survival against terrifying titans."
}

];

let current = 0;

function updateSlider(){

    slider.src = animeData[current].image;

    title.innerText = animeData[current].title;

    desc.innerText = animeData[current].desc;
}

function nextSlide(){

    current++;

    if(current >= animeData.length){
        current = 0;
    }

    updateSlider();
}

function prevSlide(){

    current--;

    if(current < 0){
        current = animeData.length - 1;
    }

    updateSlider();
}

function changeSlide(){

    current++;

    if(current >= animeData.length){
        current = 0;
    }

    updateSlider();
}

setInterval(changeSlide,3000);




// SEARCH FUNCTION

const search = document.getElementById("search");

const resultBox = document.getElementById("search-result");

const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", function(){

    let value = search.value.toLowerCase();

    resultBox.innerHTML = "";

    if(value === ""){
        resultBox.style.display = "none";
        return;
    }

    cards.forEach(function(card){

        let animeName = card.querySelector("h2").innerText;

        if(animeName.toLowerCase().includes(value)){

            let div = document.createElement("div");

            div.innerText = animeName;

            div.classList.add("search-item");

            div.onclick = function(){

                card.scrollIntoView({
                    behavior:"smooth"
                });

                resultBox.style.display = "none";
            };

            resultBox.appendChild(div);

            resultBox.style.display = "block";
        }

    });

});




// POPUP

const popup = document.getElementById("popup");

const popupImg = document.getElementById("popup-img");

const popupTitle = document.getElementById("popup-title");

const popupDesc = document.getElementById("popup-desc");

const trailerLink = document.getElementById("trailer-link");

const closeBtn = document.querySelector(".close");


cards.forEach(function(card){

    card.addEventListener("click", function(){

        popup.style.display = "flex";

        popupImg.src = card.querySelector("img").src;

        popupTitle.innerText = card.dataset.title;

        popupDesc.innerText = card.dataset.desc;

        trailerLink.href = card.dataset.trailer;

    });

});


// CLOSE BUTTON

closeBtn.addEventListener("click", function(){

    popup.style.display = "none";

});


// OUTSIDE CLICK CLOSE

window.addEventListener("click", function(e){

    if(e.target == popup){

        popup.style.display = "none";

    }

});




// HEART BUTTON

const hearts = document.querySelectorAll(".like-btn");

hearts.forEach(function(heart){

    heart.addEventListener("click", function(e){

        e.stopPropagation();

        heart.classList.toggle("fa-regular");

        heart.classList.toggle("fa-solid");

        if(heart.classList.contains("fa-solid")){
            heart.style.color = "red";
        }
        else{
            heart.style.color = "white";
        }

    });

});




// DARK LIGHT MODE

const modeToggle = document.getElementById("mode-toggle");

modeToggle.addEventListener("click", function(){

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        modeToggle.innerText = "☀️";
    }
    else{
        modeToggle.innerText = "🌙";
    }

});





const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

if(window.scrollY > 300){

topBtn.style.display = "block";

}
else{

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click", function(){

window.scrollTo({

top: 0,

behavior: "smooth"

});

});




window.addEventListener("load", function(){

    setTimeout(function(){
    
    document.getElementById("loader").style.display = "none";
    
    },2000);
    
    });



    const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function(e){

cursor.style.left = e.clientX + "px";

cursor.style.top = e.clientY + "px";

});



const typingText = document.getElementById("typing-text");

function typeTitle(text){

typingText.innerHTML = "";

let i = 0;

let speed = 50;

function typing(){

if(i < text.length){

typingText.innerHTML += text.charAt(i);

i++;

setTimeout(typing, speed);

}

}

typing();

}

function updateSlider(){

slider.src = animeData[current].image;

desc.innerText = animeData[current].desc;

typeTitle(animeData[current].title);

}