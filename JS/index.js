//Javascript

//Menu

// const menu = document.querySelectorAll('.menu-link');

//Scrolling Sections
$("html,body").animate({scrollTop: 0}, 50, 'swing');

const sections = document.querySelectorAll('.scroll-to');
// console.log(sections);
// console.log(sections.length);

const upArrow = document.querySelector('.arrow-up');
const downArrow = document.querySelector('.arrow-down');

var dist = 0;

function arrowColor() {
    if (sections[dist].dataset.light == 'light') {
        // menu.forEach(element => {
        //     $(element).animate({
        //         color: jQuery.Color('#06061C')
        //     }, 500, 'swing');
        // });
        if (dist == sections.length-1) {
            $('.arrow-down').animate({
                color: jQuery.Color({alpha: 0})
            }, 100, 'swing')
            $('.arrow-up').animate({
                color: jQuery.Color("#06061C")
            }, 500, 'swing')
        }
        else if (dist == 0) {
            $('.arrow-up').animate({
                color: jQuery.Color({alpha: 0})
            }, 100, 'swing')
            $('.arrow-down').animate({
                color: jQuery.Color("#06061C")
            }, 500, 'swing')
        }
        else {
            $('.arrow-up').animate({
                color: jQuery.Color("#06061C")
            }, 500, 'swing')
            $('.arrow-down').animate({
                color: jQuery.Color("#06061C")
            }, 500, 'swing')
        }
    }
    else {    
        // menu.forEach(element => {
        //     $(element).animate({
        //         color: jQuery.Color('#E3EBED')
        //     }, 500, 'swing');
        // });
        if (dist == sections.length-1) {
            $('.arrow-down').animate({
                color: jQuery.Color({alpha: 0})
            }, 100, 'swing')
            $('.arrow-up').animate({
                color: jQuery.Color("#E3EBED")
            }, 500, 'swing')
        }
        else if (dist == 0) {
            $('.arrow-up').animate({
                color: jQuery.Color({alpha: 0})
            }, 100, 'swing')
            $('.arrow-down').animate({
                color: jQuery.Color("#E3EBED")
            }, 500, 'swing')
        }
        else {
            $('.arrow-up').animate({
                color: jQuery.Color("#E3EBED")
            }, 500, 'swing')
            $('.arrow-down').animate({
                color: jQuery.Color("#E3EBED")
            }, 500, 'swing')
        }
    }
    sections.forEach( element => {
        element.querySelectorAll('h2').forEach( subElement => {
            $(subElement).delay(100).fadeOut();
        })
    })
    sections[dist].querySelectorAll('h2').forEach( element => {
        $(element).delay(300).fadeIn('slow');
    })
}

// function arrowVisible() {
//     if (dist == sections.length) {
//         downArrow.style.visibility = "hidden";
//     }
//     if (dist == 0) {
//         $(upArrow).animate({
//             color: jQuery.Color("transparent")
//         }).style.visibility = "hidden";
//     }
//     else {
//         upArrow.style.visibility = "visible";
//         downArrow.style.visibility = "visible";
//     }
// }


//Pre-fade
sections.forEach( element => {
    element.querySelectorAll('h2').forEach( subElement => {
        $(subElement).fadeOut();
    })
})

sections.forEach( (element, index) => {
    element.id = `sectionElement${index}`
})

window.addEventListener('wheel', event => {
    event.preventDefault();
    // console.log(dist);

    // Sets dist to next section
    if (event.deltaY > 0) {
        if ( dist < sections.length-1) {
            dist += 1;
            // Animates a scroll to the current set distance
            arrowColor();
            $("html,body").animate({scrollTop: $(`#sectionElement${dist}`).offset().top }, 500, 'swing');
            // console.log(`#sectionElement${dist}`);
        }
    }

    if (event.deltaY < 0) {
        if ( dist > 0 ){
            dist -= 1;
            arrowColor();
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
            arrowColor();
            $("html,body").animate({scrollTop: $(`#sectionElement${dist}`).offset().top }, 500, 'swing');
        }
    }

    if (event.key == 'ArrowUp' || event.key == 'PageUp') {
        event.preventDefault();
        if ( dist > 0 ){
            dist -= 1;
            arrowColor();
            $("html,body").animate({scrollTop: $(`#sectionElement${dist}`).offset().top }, 500, 'swing');
        }
    }
});

downArrow.addEventListener('click', event => {
        if ( dist < sections.length-1 ){
            dist += 1;
            arrowColor();
            $("html,body").animate({scrollTop: $(`#sectionElement${dist}`).offset().top }, 500, 'swing');
        }
});

upArrow.addEventListener('click', event => {
        if ( dist > 0 ){
            dist -= 1;
            arrowColor();
            $("html,body").animate({scrollTop: $(`#sectionElement${dist}`).offset().top }, 500, 'swing');
        }
});