/* Lógica para ativou lista dias*/

// Get the container element
let menuContainer = document.querySelector(".calendar__list");

// Get all buttons with class="btn" inside the container
let btns = menuContainer.getElementsByClassName("calendar__button");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("calendar__button--active");
    current[0].className = current[0].className.replace(" calendar__button--active", "");
    this.className += " calendar__button--active";
  });
}

/* Lógica para ativar a paginação */

let menuPagination = document.querySelector(".sale-products__pagination--right");

// Get all buttons with class="btn" inside the container
let buttonsPag = menuPagination.getElementsByClassName("sale-products__pagination-pag");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  buttonsPag[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("sale-products__pagination-pag--active");
    current[0].className = current[0].className.replace(" sale-products__pagination-pag--active", "");
    this.className += " sale-products__pagination-pag--active";
  });
}
