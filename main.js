var conteo = document.getElementById("mensaje");
var contadorsito = 0;
conteo.addEventListener("keypress",contador);


var seccion = document.getElementById("botonEnviar");
seccion.addEventListener("click",agregarTweet)


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
    de.innerHTML = "De: ";
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
    contadorsito=0;
    document.getElementById("caracteres").innerHTML = 0;

  }
}



function contador(){
  if (contadorsito < 140){
    contadorsito +=1;
    var cont = document.getElementById("caracteres");
    cont.innerHTML = contadorsito;
  }else{
    alert("No puedes escribir mas de 140 caracteres");
  }
}
