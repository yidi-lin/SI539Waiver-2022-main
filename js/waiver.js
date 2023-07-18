window.addEventListener('DOMContentLoaded', function () {
    const figures = document.querySelectorAll('figure');
    const footer = document.querySelector('footer');
    const firstFigCaption = document.querySelector('figure:first-child figcaption');

    figures.forEach(function (figure) {
        figure.classList.add('one-third');
    });

    footer.addEventListener('click', function () {
        footer.style.display = 'none';
    });

    // Hide 5th figure when double-clicked
    figures[4].addEventListener('dblclick', function () {
        figures[4].style.visibility = 'hidden';
    });

    // Change font of first figure caption on mouseover

    let originalFont;

    firstFigCaption.addEventListener('mouseover', function () {
        originalFont = firstFigCaption.style.fontFamily;
        firstFigCaption.style.fontFamily = 'Cursive';
    });

    firstFigCaption.addEventListener('mouseleave', function () {
        firstFigCaption.style.fontFamily = originalFont;
    });

    firstFigCaption.setAttribute('tabindex', '1');
    firstFigCaption.addEventListener('focus', function () {
        originalFont = firstFigCaption.style.fontFamily;
        firstFigCaption.style.fontFamily = 'Cursive';
    });

    firstFigCaption.addEventListener('blur', function () {
        firstFigCaption.style.fontFamily = originalFont;
    });
});

