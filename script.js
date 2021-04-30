const boxContainer = document.querySelector(".box-container");
const img = document.querySelector(".img-container");
const logo = document.querySelector('.logo')

gsap.from(boxContainer, { x: -100, opacity: 0, duration: 1.2 });
gsap.from(img, { x: 100, opacity: 0, duration: 1.2 });
gsap.from(logo, { y: -100, opacity: 0, duration: 1.2, delay:0.4 });
