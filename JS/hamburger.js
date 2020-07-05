// JavaScript Document
/*const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	
	burger.addEventListener('click',() => {
		//toggle nav
		nav.classList.toggle('nav-active');
			
		//animate links
		navLinks.forEach((link,index) => {
		if(link.style.animation){
			link.style.animation = ""
		}else{
			link.style.animation = `navLinkFade 0.1s ease forwards ${index / 7 + 0.5}s`;	
		}
	});
		//burger animation
		burger.classList.toggle('toggle');
	
	});
	
	
}
	
	

navSlide();*/

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

