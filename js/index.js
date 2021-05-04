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
