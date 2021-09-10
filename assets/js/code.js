const portfolio = document.getElementById("portfolio");
let width = screen.width;
console.log(width);

if (width < 590) portfolio.classList.add("g-2");
if (width < 572) document.querySelector(".frameworks").classList.add("pt-4");
