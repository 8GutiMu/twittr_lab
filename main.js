


function agregarTweet(){
  event.preventDefault();
  //saca valor de caja de texto y de nombre
  var mensaje = document.getElementById("mensaje").value;
  var persona = document.getElementById("persona").value;

  if (mensaje == "" || persona == ""){
    alert("Llena todos los campos")
  } else{

    //crear un articulo nuevo y sus elementos
    var articulo = document.createElement("article");
    var tweet = document.createElement("p");
    var de = document.createElement("p");
    var personaTweet = document.createElement("span");

    //escribir los textos
    de.innerHTML = "De:";
    tweet.innerHTML = mensaje;
    personaTweet.innerHTML = persona;

    de.appendChild(personaTweet);
    de.style.fontSize = "12px";
    articulo.appendChild(tweet);
    articulo.appendChild(de);

    document.getElementById("tweets").appendChild(articulo);

    //vaciar cajas de texto
    document.getElementById("mensaje").value ="";
    document.getElementById("persona").value ="";
  }









}
