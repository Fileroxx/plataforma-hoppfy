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