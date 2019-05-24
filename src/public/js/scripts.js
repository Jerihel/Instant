$(function() {
  // Vistas de publicaciones
  $('#post-comment').hide();
  $('#btn-toggle-comment').click(e => {
    e.preventDefault();
    $('#post-comment').slideToggle();
  });
  
  // Contador de likes
  $('#btn-like').click(function(e) {
    e.preventDefault();
    let imgId = $(this).data('id');
    console.log(imgId)
    $.post('/images/' + imgId + '/like')
      .done(data => {
      console.log('back:', data)
        $('.likes-count').text(data.likes);
      });
  });

  // Eliminar imagenes
  $('#btn-delete').click(function (e) {
    e.preventDefault();
    let $this = $(this);
    const response = confirm('¿Estás seguro de que quieres borrar esta imagen?');
    if (response) {
      let imgId = $(this).data('id');
      $.ajax({
        url: '/images/' + imgId,
        type: 'DELETE'
      })
        .done(function(result) {
          $this.removeClass('btn-danger').addClass('btn-success');
          $this.find('i').removeClass('fa-times').addClass('fa-check');
          $this.append('<span>Eliminada!</span>');
        });
    }
  });
});
