//Javascript

$("html,body").animate({scrollTop: 0}, 50, 'swing');

const sections = document.querySelectorAll('section');
console.log(sections);
console.log(sections.length);
var dist = 0;

window.addEventListener('wheel', event => {
    event.preventDefault();
    // console.log(dist);

    // Sets dist to next section
    if (event.deltaY > 0) {
        if ( dist < window.innerHeight*(sections.length-1) ){
            dist += window.innerHeight;
            // Animates a scroll to the current set distance
            $("html,body").animate({scrollTop: dist}, 500, 'swing');
        }
    }

    if (event.deltaY < 0) {
        if ( dist > 0 ){
            dist -= window.innerHeight;
            $("html,body").animate({scrollTop: dist}, 500, 'swing');
        }
    }
});

window.addEventListener('keydown', event => {
    // console.log(dist);

    // Sets dist to next section
    if (event.key == 'ArrowDown' || event.key == 'PageDown') {
        event.preventDefault();
        if ( dist < window.innerHeight*(sections.length-1) ){
            dist += window.innerHeight;
            // Animates a scroll to the current set distance
            $("html,body").animate({scrollTop: dist}, 500, 'swing');
        }
    }

    if (event.key == 'ArrowUp' || event.key == 'PageUp') {
        event.preventDefault();
        if ( dist > 0 ){
            dist -= window.innerHeight;
            $("html,body").animate({scrollTop: dist}, 500, 'swing');
        }
    }
});