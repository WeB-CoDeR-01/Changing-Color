function btn_active() {
   var color_choice = Math.floor(Math.random() * 7);
   switch(color_choice) {
       case 0:
       color_fun("red");
       break;
       case 1:
       color_fun("lightgreen");
       break;
       case 2:
       color_fun("lightblue");
       break;
       case 3:
       color_fun("lightcoral");
       break;
       case 4:
       color_fun("lightsalmon");
       break;
       case 5:
       color_fun("lightgoldenrodyellow");
       break;
       case 6:
       color_fun("lightslategrey");
       break;
       case 7:
       color_fun("lightyellow");
       break;
       case 8:
       color_fun("#202124");
       break;
   }
}

function color_fun(color) {
    var background_color = document.querySelectorAll('*');
    var background_div = document.getElementById('btn_div');
    background_color[0].style.background = color;
    background_div.style.background = color;
}