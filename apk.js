// alert("alert")

const menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let header = document.querySelector("header");

// menu.addEventListener("click", () => {
//     navbar.classList.toggle("active");
// });


menu.onclick = ()=>{
    menu.classList.toggle("ri-close-large-fill")
   navbar.classList.toggle("active")
}

window.onscroll = () =>{
    menu.classList.remove("ri-close-large-fill");
    navbar.classList.remove("active");
}

window.addEventListener("scroll", ()=>{
    header.classList.toggle("shadow", window.scrollY > 0);
});