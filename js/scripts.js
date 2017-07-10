$(document).ready(function(){
  var flavors = ["chocolate","vanilla","Strawberry","Caramel"]
  flavors.forEach(function(flavor){
      $("#fun").prepend("<li>" + flavor + "</li>");
  });
})
