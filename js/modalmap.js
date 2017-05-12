var mapOpen = document.querySelector(".map_js"),
    mapModalContent = document.querySelector(".modalmap"),
    mapClose = mapModalContent.querySelector(".modalcontent__button");

mapOpen.addEventListener('click', function(event) {
  event.preventDefault();
  mapModalContent.classList.add('modalmap_show');
});

mapClose.addEventListener('click', function(event) {
  event.preventDefault();
  mapModalContent.classList.remove('modalmap_show');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (mapModalContent.classList.contains('modalmap_show')) {
      mapModalContent.classList.remove('modalmap_show');
    }
  }
});
