// let slideIndex = 1;
// showSlides(slideIndex);

// // Cambiar la diapositiva al hacer clic en los botones
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Establecer la diapositiva actual
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// // Mostrar la diapositiva correspondiente
// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");

//   // Ajustar el índice si es necesario
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}

//   // Ocultar todas las imágenes
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }

//   // Eliminar la clase "active" de todos los puntos
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }

//   // Mostrar la diapositiva activa
//   slides[slideIndex-1].style.display = "block";  

//   // Activar el punto correspondiente
//   dots[slideIndex-1].className += " active";
// }
