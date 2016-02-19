exports.dataLoad = function(data){
  var repos = [];
// console.log(data.length);
  for (var i = 0; i < data.length; i++) {
    var repo = {};
    repo.name = data[i].name;

    if ( i % 2 === 0 ){
      $("#repos").append("<li class='odd'><a href='"+ repo.git_url +"'>" + repo.name + "</a></li>");
    }
    else {
      $("#repos").append("<li class='even'><a href='"+ repo.git_url +"'>" + repo.name + "</a></li>");
    }
  }
};
