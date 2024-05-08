
document.addEventListener("DOMContentLoaded", function() {
    const mainCharacter = document.querySelector(".maincharacter-image");
    const title = document.querySelector(".title");
    const subtitle = document.querySelector(".subtitle");
    const director = document.querySelector(".director");
    const textBlock = document.querySelector(".text-block");
    const rating1 = document.querySelector(".position1");
    const rating2 = document.querySelector(".position2");
    const circle1 = document.querySelector(".circle1");
    const circle2 = document.querySelector(".circle2");

// Eventlistener für Klick //
    mainCharacter.addEventListener("click", function() {
        // Elemente einblenden //
        textBlock.style.opacity = "1";
        rating1.style.opacity = "1";
        rating2.style.opacity = "1";
        circle1.style.opacity = "1";
        circle2.style.opacity = "1";

        // Elemente ausblenden //
        title.style.opacity = "0";
        subtitle.style.opacity = "0";
        director.style.opacity = "0";
    });

    // Eventlistener für Klick auf einen der Kreise
    circle1.addEventListener("click", function() {
        // Alle Elemente zurücksetzen
        textBlock.style.opacity = "0";
        rating1.style.opacity = "0";
        rating2.style.opacity = "0";
        circle1.style.opacity = "0";
        circle2.style.opacity = "0";
        title.style.opacity = "1";
        subtitle.style.opacity = "1";
        director.style.opacity = "1";
    });

    circle2.addEventListener("click", function() {
        // Alle Elemente zurücksetzen
        textBlock.style.opacity = "0";
        rating1.style.opacity = "0";
        rating2.style.opacity = "0";
        circle1.style.opacity = "0";
        circle2.style.opacity = "0";
        title.style.opacity = "1";
        subtitle.style.opacity = "1";
        director.style.opacity = "1";
    });
});
