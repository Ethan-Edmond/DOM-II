// Your code goes here
const links = document.querySelectorAll('.nav-link');
links.forEach(function(link){
  link.addEventListener("mouseover", (event) => {
    link.style.fontSize = "2.2rem";
  });
  link.addEventListener("mouseleave", (event) => {
    link.style.fontSize = "1.6rem";
  });
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
{
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
  event.stopPropagation();
}
let first = document.createElement("input");
first.style.type = "text";
first.value = "asdfadf";
document.body.append(first);
first.addEventListener("select", selectRandomize);

// this is so horrible
function fontColorRand(event){
  if (event.keyCode === 32){
    document.body.style.color = `#${Math.floor(Math.random() * (256**3)).toString(16)}`;
  }
}
document.addEventListener("keydown", fontColorRand);
