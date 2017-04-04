function NewTweet(tweetContenido,persona){
    this.tweetContenido = tweetContenido;
    this.persona = persona;
}

function createTweet(){
  var tweetContenido = document.getElementById("mensaje").value;
  var persona = document.getElementById("persona").value;

  if(tweetContenido == "" || persona == ""){
    alert("Llena todos los campos");
    event.preventDefault();
  } else{
    var tweet = new NewTweet(tweetContenido,persona);
    renderHTML(tweet);
  }

}

function renderHTML(tweet) {
  event.preventDefault();

    //crear elementos
    var articulo = document.createElement("article");
    var contenedorTweet = document.createElement("p");
    var de = document.createElement("p");
    var personaTweet = document.createElement("span");
    var botonEliminar = document.createElement("button");
    var salto = document.createElement("br");

    //escribir los textos
    articulo.class = "articleNew";
    de.innerHTML = "De: ";
    contenedorTweet.innerHTML = tweet.tweetContenido;
    personaTweet.innerHTML = tweet.persona;
    botonEliminar.type = "button";
    botonEliminar.innerText = "Eliminar";
    botonEliminar.class = "dentroTweet";
    botonEliminar.onclick = function(event){
      var articulo = this.parentElement;
      articulo.remove();
    }

    de.appendChild(personaTweet);
    de.style.fontSize = "12px";
    articulo.appendChild(contenedorTweet);
    articulo.appendChild(de);
    articulo.appendChild(botonEliminar);

    document.getElementById("tweets").appendChild(articulo);
    document.getElementById("tweets").appendChild(salto);

    //vaciar cajas de texto
    document.getElementById("mensaje").value ="";
    document.getElementById("persona").value ="";
    contadorsito=0;
    document.getElementById("caracteres").innerHTML = 0;



}


var conteo = document.getElementById("mensaje");
var contadorsito = 0;
var contadorsitoClick =0;
conteo.addEventListener("keypress",contador);


var seccion = document.getElementById("botonEnviar");
seccion.addEventListener("click",createTweet);

document.addEventListener("click",contadorClick);


function contador(){
  if (contadorsito < 140){
    contadorsito +=1;
    var cont = document.getElementById("caracteres");
    cont.innerHTML = contadorsito;
  }else{
    alert("No puedes escribir mas de 140 caracteres");
  }
}

function contadorClick(){

    contadorsitoClick+= 1;
    document.getElementById("contClicks").innerHTML = contadorsitoClick;
    event.stopPropagation();

}

function noClick(){
  event.stopPropagation();
}
