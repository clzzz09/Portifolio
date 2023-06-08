function sb_open() {
    document.getElementById("mySidebar").style.display = "block"
    document.getElementById("myOverlay").style.display = "block"
}
 
function sb_close() {
    document.getElementById("mySidebar").style.display = "none"
    document.getElementById("myOverlay").style.display = "none"
}

// Obtém o modal
var modal = document.getElementById("myModal");

// Obtém o botão que abre o modal
var btn = document.getElementById("myBtn");

// Obtém o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clica no botão, abre o modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clica no <span> (x), fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clica em qualquer área fora do modal, fecha-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}