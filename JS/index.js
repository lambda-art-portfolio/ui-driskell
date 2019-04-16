//Javascript


//Scrolling Sections
$("html,body").animate({scrollTop: 0}, 50, 'swing');

const sections = document.querySelectorAll('.scroll-to');
// console.log(sections);
// console.log(sections.length);
var dist = 0;

console.log(sections[dist]);

for (let i = 0; i < sections.length; i++) {
    sections[i].id = `sectionElement${i}`;
    console.log(sections[i]);
};

window.addEventListener('wheel', event => {
    event.preventDefault();
    // console.log(dist);

    // Sets dist to next section
    if (event.deltaY > 0) {
        if ( dist < sections.length-1) {
            dist += 1;
            // Animates a scroll to the current set distance
            $("html,body").animate({scrollTop: $(`#sectionElement${dist}`).offset().top }, 500, 'swing');
            // console.log(`#sectionElement${dist}`);
        }
    }

    if (event.deltaY < 0) {
        if ( dist > 0 ){
            dist -= 1;
            $("html,body").animate({scrollTop: $(`#sectionElement${dist}`).offset().top }, 500, 'swing');
        }
    }
});

window.addEventListener('keydown', event => {
    // console.log(dist);

    // Sets dist to next section
    if (event.key == 'ArrowDown' || event.key == 'PageDown') {
        event.preventDefault();
        if ( dist < sections.length-1) {
            dist += 1;
            // Animates a scroll to the current set distance
            $("html,body").animate({scrollTop: $(`#sectionElement${dist}`).offset().top }, 500, 'swing');
        }
    }

    if (event.key == 'ArrowUp' || event.key == 'PageUp') {
        event.preventDefault();
        if ( dist > 0 ){
            dist -= 1;
            $("html,body").animate({scrollTop: $(`#sectionElement${dist}`).offset().top }, 500, 'swing');
        }
    }
});

