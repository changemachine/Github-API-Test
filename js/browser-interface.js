var dataLoad = require('./../js/dataLoad-interface.js').dataLoad;

$(function() {
  $("#userName").submit(function(e){
    $.get({
      url: 'https://api.github.com/users/changemachine/repos',
      dataType: 'json',
      userAgent: 'test',
      success: function(data) {
        $('#userName').html("<h2>"+ data[0].owner.login +"</h2>").append("<h4>Repositories:</h4>");
        // console.log(data[0].owner.login);
        dataLoad(data);
      }// /success

  });// /get
  e.preventDefault();
});


}); // /doc-ready
