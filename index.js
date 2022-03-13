const sideMenu = ducument.querySelector("aside");
const menuBtn = ducument.querySelector("#menu-btn");
const closeBtn = ducument.querySelector("#close-btn");

menuBtn.addEventlistener('click', () => {
  sideMenu.style.display = 'block';
})

closeBtn.addEventlistener('click', () => {
  sideMenu.style.display = 'none';
})
