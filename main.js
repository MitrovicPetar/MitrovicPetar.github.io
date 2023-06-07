let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  
  // Sakrij sve slajdove
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Povećaj indeks slajda
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
    
    // Ako je ovo poslednji slajd, odmah prikaži prvi slajd
    slides[0].style.display = "block";

  } else {
    // Inače, prikaži slajd sa trenutnim indeksom
    slides[slideIndex-1].style.display = "block";  

  }
  
  // Pozovi sledeći slajd odmah nakon 8 sekundi
  setTimeout(showSlides, 13000);
}