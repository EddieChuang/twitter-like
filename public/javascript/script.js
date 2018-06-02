$(document).ready(function(){
  $('#menu-btn').click(changeNav)

  function changeNav(){
    $('#links').slideToggle(1000)
    $('#menu-btn').toggleClass('turn')
  }

})