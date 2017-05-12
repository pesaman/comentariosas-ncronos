$( document ).ready(function() {

  $('button#new_comment_button').click(function(){
    $('button#new_comment_button').hide();
    $('ul#comment_list').append("<form action='/create_comment' method='POST' class='comment_form'><br><input type='text' name='comment' id='form_comment_text' placeholder='Comment'><br><input type='text' name='author' id='form_comment_author' placeholder='Author'><br><br><input type='submit' id='form_comment_submit' value='Enviar'></form>");
  
    $(".comment_form").submit(function(e){
      e.preventDefault();
      console.log(e);
      console.log("Hola estas dentro del formulario");

      author = $('#form_comment_author').val()
      comment = $('#form_comment_text').val()
      console.log("autor: " + author + "  comment " + comment);

      $('.comment_form').hide(); 
      $('ul#comment_list').append("<li>"+comment+"<span class='author'>"+author+"</span></li>");
      $('button#new_comment_button').show();
      $.post( "/create_comment",$( ".comment_form" ).serialize(), function(data){
        alert(data);
      });
      $(".comment_form").remove();

    });

  });
 
  



  // $(function(){
  // });

});