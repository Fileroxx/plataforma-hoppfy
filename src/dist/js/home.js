const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 4
      }
    }
  });

  var dropDown = $('.ul-profile');
  dropDown.hide();
  $(document).ready(function() {
    var botao = $('.selectProfile');
    var dropDown = $('.ul-profile');
    botao.on('click', function(event) {
      dropDown.stop(true, true).slideToggle();
      event.stopPropagation();
    });
  });

  $(document).ready(function(){
    $(".hamburguer").click(function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass("active");
    });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-aviso")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

setTimeout(function(){ 
	document.getElementById("myModal").style.display = "block";
}, 1000);