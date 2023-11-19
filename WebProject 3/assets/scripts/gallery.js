$(document).ready(function() {
  $('.image img').click(function() {
    const imgSrc = $(this).attr('src');
    $('#modal-image').attr('src', imgSrc);
    
    // Set image to cover the entire screen
    $('#modal-image').css({
      'position': 'relative',
      'margin-top' : '200px',
      'width': '100%%',
      'height': '50%',
      'z-index': '1000',
    });
    
    // Show the modal
    $('.modal').css({
      'display': 'block',
      'background-color': 'rgba(0, 0, 0, 0.9)', 
    });
  });

  $('.close').click(function() {
    // Reset image size and hide the modal
    $('#modal-image').removeAttr('style');
    $('.modal').css('display', 'none');
  });
});
