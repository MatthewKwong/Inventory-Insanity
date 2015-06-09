
/*Night Mode text*/
    
      addEventListener("keydown", function(event) {
    if (event.keyCode == 13)
document.body.style.backgroundImage = "url('http://i.imgur.com/05avamS.jpg')";
  });
  addEventListener("keyup", function(event) {
    if (event.keyCode == 13)
document.body.style.backgroundImage = "url('')";
  });


