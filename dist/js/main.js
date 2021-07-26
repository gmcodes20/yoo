const navBarContainer = document.getElementById("navbar-container"),
  menuBtn = document.getElementById("menu-btn"),
  navItem = document.querySelectorAll(".navbar__list-item"),
  burger = document.querySelector(".burger");

let open = false;

menuBtn.addEventListener("click", clickEvent);

function clickEvent() {
  if (!open) {
    navBarContainer.classList.add("open");
    navItem.forEach((item) => item.classList.add("open"));
    menuBtn.classList.add("open");
    burger.classList.add("open");

    open = true;
  } else {
    navBarContainer.classList.remove("open");
    navItem.forEach((item) => item.classList.remove("open"));
    menuBtn.classList.remove("open");
    burger.classList.remove("open");

    open = false;
  }
}
