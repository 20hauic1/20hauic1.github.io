$(document).ready(function() {

  //hides the left arrow in the right room at the start
  $('.left-arrow-rightroom').hide();

  //what happens when right arrow in the main room is clicked
  $('#right-arrow-main').click(function() {
    $('body').css('background-image', 'url(http://cdn.theatlantic.com/static/mt/assets/business/SadKerviel.jpg)');
    $(this).hide();
    $('#right-arrow-leftroom').show();
  });

  //what happens when you click the left arrow in the room on the right
  $('#left-arrow-rightroom').click(function() {
    $('body').css('background-image', 'url(http://cdn.theatlantic.com/static/mt/assets/business/SadKerviel.jpg)');
    $(this).hide();
  });
 //hides the right arrow in the left room at the start
  $('.right-arrow-leftroom').hide();
  
  //what happens when left arrow in the main room is clicked
  $('#left-arrow-main').click(function() {
    $('body').css('background-image', 'url(http://1.bp.blogspot.com/-OImfhEmc8Zk/Vj63btGxKrI/AAAAAAAAANE/TnGvOwQrPdk/s1600/Smiling-Man.jpg)');
    $(this).hide();
    $('')
  }); 
  
//what happens when the left arrow in the right room is clicked