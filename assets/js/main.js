//SET CURRENT YEAR IN FOOTER

document.getElementById("year").innerHTML = (new Date().getFullYear());
console.log('hhh');

//MODALS

var modals = document.getElementsByClassName("modal");
var modalOpen = document.getElementsByClassName("modalOpen");
var currentModal = null;

// Function to open modal by id
function openModal(id) {
  for (i = 0; i < modals.length; i++) {
    if (modals[i].getAttribute('id') == id) {
      currentModal = modals[i];
      currentModal.style.display = "block";
      break;
    }
  }
}

// When the user clicks the button, open modal with the same id
modalOpen.onclick = function() {
  let currentID = modalOpen.getAttribute('id');
  openModal(currentID);
}

// When the user clicks anywhere outside of the modal or the X, close
window.onclick = function(event) {
  if (event.target == currentModal || event.target.getAttribute('class') == 'modalClose') {
    currentModal.style.display = "none";
  }
}