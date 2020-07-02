//Navbar effect
document.addEventListener("scroll", function(){

  if (document.documentElement.scrollTop > 35){ //35 from 50 - because small screens
    $('nav').addClass("nav-scroll");
    $('.branding').addClass("scroll-text");

    $('.nav-link').addClass("scroll-texts");
    $('#navbar-icon').addClass("scroll-texts");
  } else {
    $('nav').removeClass("nav-scroll");
    $('.branding').removeClass("scroll-text");

    $('.nav-link').removeClass("scroll-texts");
    $('#navbar-icon').removeClass("scroll-texts");
  }
});

//on clicking "Find out more button, it scrolls to portfolio/projects section"
$("#btnTitle").click(function(){
  window.location.href = "#portfolio";
});

//click event / href for project (items)
$('.project-hover').click(function(){

  const projectArr = ["lucky", "banana", "orange", "drum", "simon", "tic-tac-toe"]

  for (var i=0; i< projectArr.length; i++){
    if (this.classList.contains(projectArr[i])){ // CHANGE THE HREF - WHEN DEPLOYING!!!
      window.location.href = "http://bibek-portfolio.com/"+projectArr[i]+"/index.html";
    }
  }

//Different urls
if(this.classList.contains('dicee')){
  window.location.href = "http://bibek-portfolio.com/dicee/dicee.html";
}

// NODEJS - HREF ARE DIFFERENT HERE
  if(this.classList.contains('bitcoinAPI')){
    window.location.href = "https://evening-savannah-56387.herokuapp.com";
  }

  if(this.classList.contains('newsletter-signup')){
    window.location.href = "https://warm-wave-77840.herokuapp.com";
  }

  if(this.classList.contains('to-do-list')){
    window.location.href = "https://tranquil-bayou-41848.herokuapp.com";
  }

  if(this.classList.contains('blog-website')){
    window.location.href = "https://lit-headland-09710.herokuapp.com";
  }

});

// For Mobile devices only - max-device-width:480px
document.getElementById('navbar-icon').addEventListener("click", function(){
  let navItems = document.getElementById("navbar-items");

//this toggles the nav items
//If navbar is open (block) then hide (none)
  if (navItems.style.display === "block")
  {
    navItems.style.display = "none";
  }
  else
  {
    navItems.style.display = "block";
    //else if its hidden, then show (display:block)
  }
});
