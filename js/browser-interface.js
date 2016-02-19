var dataLoad = require('./../js/dataLoad-interface.js').dataLoad;


$(function() {
  $.get({
    url: 'https://api.github.com/users/changemachine/repos',
    dataType: 'json',
    userAgent: 'test',
    success: function(data) {
      dataLoad(data);
    }// /success
  });// /get




}); // /doc-ready
