let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

document.querySelector('.contact-form').addEventListener("submit",submitForm);
function submitForm(e){
    e.preventDefault();

    let name = document.querySelector('.name').value;
    let number = document.querySelector('.number').value;
    let email = document.querySelector('.email').value;
    let address = document.querySelector('.address').value;
    let coffees = document.querySelector(".yourcoffee").value;
    document.querySelector(".contact-form").reset();
    sendEmail(name,number,email,address,coffees);
}

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');


window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec => {
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');

      if(top => offset && top < offset + height){
        navLinks.forEach(links =>{ 
          links.classList.remove('active');
          document.querySelector('header .navbar a[href*='+id+']');   
              });
      };
    });
}
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');

}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
       
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  
    },
    loop:true,
    breakpoints:{
      0:{
        slidesPerView:1,
      },
      640:{
        slidesPerView:2,
      },
      768:{
        slidesPerView:2,
      },
      1024:{
        slidesPerView:3,
      },
    },
  
  });

  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  function fadeOut(){
    setInterval(loader,3000);
  }
  window.onload = fadeOut;


  function sendEmail(name,number,email,address,coffees){
    Email.send({
        Host: "smtp.gmail.com",
        Username:"manishrana3343667@gmail.com",
        Password:"zzepfnzafotztfdx",
        To:`${email}`,
        From:"manishrana3343667@gmail.com",
        Subject:`Coffee Lover sent you a message`,
        Body:`Name:${name} <br/> Number:${number} <br/> Email:${email} <br/> Address:${address} <br/> Your Coffee:${coffees}`,

    }).then((message) => alert("mail sent successfully"))
}
 