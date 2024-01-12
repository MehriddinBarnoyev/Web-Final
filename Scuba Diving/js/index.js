let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');

Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};




var swiper = new Swiper(".home-slid", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});



var swiper = new Swiper(".team-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      "0": {
        slidesPerView: 1,
        autoplay:{
            delay:700,
            disableOnInteraction:false,
        },
      },
      "768": {
        slidesPerView: 2,
          
      },
      "1020": {
        slidesPerView: 3,
          
      },
    },
  });
  
function sendMail(e){
  e.preventDefault();
  var tempParams = {
    from_name:document.getElementById("fromName").value,
    to_name:document.getElementById("toName").value,
    message: document.getElementById("msg").value,
  };

  emailjs.send('service_i0lcqmm' ,'template_xe2gl6b',tempParams)
  .then (function(res){
    document.getElementById("fromName").value = "",
    document.getElementById("toName").value = "",
    document.getElementById("msg").value = "",
    console.log('success', res.status);
    alert('Your message send successfully');
  })
}

