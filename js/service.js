
    document.getElementById("toggleBtn1").onclick = function() {

        var graphic = document.getElementById("graphic");
        var drawing = document.getElementById("drawing");
        var pg = document.getElementById("programming");
        var pd = document.getElementById("pd");

        if (graphic.style.display === "none") {
            graphic.style.display = "block";
            drawing.style.display = "none";
            pg.style.display = "none";
            pd.style.display = "none";
        } else {
            drawing.style.display = "none";
            pg.style.display = "none";
            pd.style.display = "none";
            
        }
    };

    document.getElementById("toggleBtn2").onclick = function() {

      var graphic = document.getElementById("graphic");
      var drawing = document.getElementById("drawing");
      var pg = document.getElementById("programming");
      var pd = document.getElementById("pd");

      if (drawing.style.display === "none") {
          drawing.style.display = "block";
          graphic.style.display = "none";
          pg.style.display = "none";
          pd.style.display = "none";
      } else {
          graphic.style.display = "none";
          pg.style.display = "none";
          pd.style.display = "none";
          
      }
  };

  document.getElementById("toggleBtn3").onclick = function() {

    var graphic = document.getElementById("graphic");
    var drawing = document.getElementById("drawing");
    var pg = document.getElementById("programming");
    var pd = document.getElementById("pd");

    if (pg.style.display === "none") {
        pg.style.display = "block";
        graphic.style.display = "none";
        drawing.style.display = "none";
        pd.style.display = "none";
    } else {
        graphic.style.display = "none";
        drawing.style.display = "none";
        pd.style.display = "none";
        
    }
};

document.getElementById("toggleBtn4").onclick = function() {

  var graphic = document.getElementById("graphic");
  var drawing = document.getElementById("drawing");
  var pg = document.getElementById("programming");
  var pd = document.getElementById("pd");

  if (pd.style.display === "none") {
      pd.style.display = "block";
      graphic.style.display = "none";
      pg.style.display = "none";
      drawing.style.display = "none";
  } else {
      graphic.style.display = "none";
      pg.style.display = "none";
      drawing.style.display = "none";
      
  }
};
