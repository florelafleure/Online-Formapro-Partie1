/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

// la fonction qui est déclenché par le clic sur le chevron
function showDropdown() {
  // selectionne ma liste de dropdown et switch la class show
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
// si je click n'importe sur le site
window.onclick = function hideDropdownOnExternalClick(event) {
  // et que je n'ai pas cliqué sur .drop
  if (!event.target.matches(".drop")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      openDropdown.classList.remove("show");
    }
  }
};
