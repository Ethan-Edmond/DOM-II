import { gsap } from "gsap";
const links = document.querySelectorAll('.nav-link');
links.forEach(function(link){
  link.addEventListener("mouseover", (event) => {
    gsap.to(link, {duration: 0.5, fontSize: "2.2rem"});
    // link.style.fontSize = "2.2rem";
  });
  link.addEventListener("mouseleave", (event) => {
    gsap.to(link, {duration: 0.5, fontSize: "1.6rem"});
    // link.style.fontSize = "1.6rem";
  });
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
{
  // this rotates the hue and increases alpha of the background with scroll, nice!
  let headerShowing = true;
  let header = document.querySelector('header');
  document.addEventListener("scroll", (event) => {
    if (window.scrollY > 90 && headerShowing){
      header.style.display = "none";
      headerShowing = false;
    } else if (window.scrollY <= 90 && !headerShowing){
      header.style.display = "block";
      headerShowing = true;
    }
    document.body.style.backgroundColor = `hsla(${150 + ((scrollY * 60) / document.body.scrollHeight)}, 100%, 50%, ${Math.sin((scrollY * Math.PI) / document.body.scrollHeight)})`;
  });
}
{
  const headlines = document.querySelectorAll("h2");
  let bigWords = false;
  function setTransitionNdoublebump(header){
    header.style.transition = "font-size 1s";
    header.addEventListener("dblclick", (event)=> {
      if (!bigWords){
        header.style.fontSize = "4.3rem";
      } else {
        header.style.fontSize = "3.2rem";
      }
      bigWords = !bigWords;
      event.stopPropagation();
    });
  }
  headlines.forEach(setTransitionNdoublebump);
}
function selectRandomize(event){
  let alphabet = "qwertyuiopasdfghjklzxcvbnm".split("");
  let tempString = "";
  for(let i = 0; i < 10; i++){
    tempString += alphabet[Math.floor(Math.random() * 26)];
  }
  event.target.value = tempString;
}
let first = document.createElement("input");
first.style.type = "text";
first.value = "asdfadf";
document.body.append(first);
first.addEventListener("select", selectRandomize);

first.addEventListener("focus", (event) => {
  gsap.to(first, {duration: 0.8, border: "1px solid red"});
});
first.addEventListener("blur", (event) => {
  gsap.to(first, {duration: 0.4, border: "0px solid red"});
});

// this is so horrible
function fontColorRand(event){
  if (event.keyCode === 32){
    gsap.to(document.body, {duration: 0.5, color: `#${Math.floor(Math.random() * (256**3)).toString(16)}`});
  }
}
document.addEventListener("keydown", fontColorRand);

function wheelZoom(event){
  let oldSize = parseFloat(event.target.style.fontSize);
  gsap.to(event.target, {duration: 5, fontSize: `${oldSize - (event.deltaY * 0.004)}rem`});
  event.preventDefault();
}
const paras = document.querySelectorAll("p");
paras.forEach((para) => {
  para.style.fontSize = "1.5rem";
  para.addEventListener("wheel", wheelZoom);
});

// this is the worst site
window.addEventListener("load", (event) => {
  alert("Page has loaded");
});

let headlineX = document.createElement("h3");
headlineX.textContent = document.body.scrollWidth;
headlineX.style.fontSize = "3rem";
let headlineY = document.createElement("h3");
headlineY.textContent = document.body.scrollHeight;
headlineY.style.fontSize = "3rem";
document.body.append(headlineX);
document.body.append(headlineY);

window.addEventListener("resize", (event) => {
  headlineX.textContent = document.body.scrollWidth;
  headlineY.textContent = document.body.scrollHeight;
});

// pointless widget
let cardHolder = document.createElement("div");
cardHolder.style.width = "100%";
cardHolder.style.height = "80px";
cardHolder.style.backgroundColor = "white";
cardHolder.style.border = "1px solid grey";
cardHolder.style.display = "flex";
document.body.append(cardHolder);
let draggedCard;
for (let i = 0; i < 7; i++){
  let cardContainer = document.createElement("div");
  cardContainer.style.height = "100%";
  cardContainer.style.width = "25%";
  cardContainer.classList.add("card-container");
  let card = document.createElement("div");
  card.style.height = "100%";
  card.style.width = "100%";
  card.style.backgroundColor = `hsl(${(i * 360) / 8}, 100%, 50%)`;
  card.draggable = "true";
  card.classList.add("card");
  cardHolder.append(cardContainer);
  cardContainer.append(card);
  card.addEventListener("dragstart", (event) => {
    draggedCard = event.target;
    event.stopPropagation();
  });
  card.addEventListener("dragenter", (e) => e.preventDefault());
  card.addEventListener("dragover", (e) => e.preventDefault());
  card.addEventListener("drop", (event) => {
    if (event.target !== draggedCard){
      let parent1 = event.target.parentNode;
      let parent2 = draggedCard.parentNode;
      parent1.removeChild(event.target);
      parent2.removeChild(draggedCard);
      parent1.appendChild(draggedCard);
      parent2.appendChild(event.target);
    }
    draggedCard = null;
  });
}


let sections = document.querySelectorAll(".container.home header, .container.home section");
sections.forEach((child) => {
  child.addEventListener("dblclick", (event) =>{
    gsap.to(child, {duration: 0.5, backgroundColor: "red"});
  });
});
