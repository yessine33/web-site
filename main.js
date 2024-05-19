 // Sélectionne le bouton par son ID
 let button = document.getElementById("myButton");

 // Ajoute un gestionnaire d'événements pour le clic sur le bouton
 button.addEventListener("click", function() {
     alert("correct");
      window.location.href = "http://127.0.0.1:3000/tt.html";
 });

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
