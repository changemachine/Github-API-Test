exports.dataLoad = function(data){
  var repos = [];

  for (var i = 0; i < data.length; i++) {
    var repo = {};
    repo.name = data[i].name;

    if ( i % 2 === 0 ){
      $("#repos").append("<li class='odd'>" + repo.name + "</li>");
      // repos.push(repo);
    }
    else {
      $("#repos").append("<li class='even'>" + repo.name + "</li>");
    }
  }
};
