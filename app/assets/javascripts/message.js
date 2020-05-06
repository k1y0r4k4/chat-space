$(function(){
    function buildHTML(message){
      if ( message.image ) {
        var html = 
          `<div class="massages" data-message-id=${message.id}>
            <div class="message">
              <div class="message__name">
                ${message.user_name}
              </div>
              <div class="message__date"> 
                ${message.date} 
              </div>
            </div>
            <div class="message__text">
              <p class="lower-message__content">
                ${message.content}
              </p>
            </div>
            <img src=${message.image} >
          </div>`
        return html;
      } else {
         var html = 
          `<div class="massages">
            <div class="message">
              <div class="message__name">
                ${message.user_name}
              </div>
              <div class="message__date"> 
                ${message.date} 
              </div>
            </div>
            <div class="message__text">
              <p class="lower-message__content">
                ${message.content}
              </p>
            </div>
          </div>`
        return html;
      };
    }
$('.sending__submit').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      fataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function(data){
        var html = buildHTML(data);
        $('.messages').append(html)
        
      })
  })
});