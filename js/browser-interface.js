
var dataLoad = function(data){
  var repos = [];

  for (var i = 0; i < data.length; i++) {
    var repo = {};
    repo.name = data[i].name;
    $("#repos").append("<li class='even'>" + repo.name + "</li>");
    // repos.push(repo);
  }
};


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
