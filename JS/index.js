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
var currentlyAnimating = 0;



function arrowColor() {
    // if (currentlyAnimating === 0) {
    //     currentlyAnimating = 1;
        if (sections[dist].dataset.light == 'light') {
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
            element.querySelectorAll('.fadeable').forEach( subElement => {
                $(subElement).delay(100).fadeOut();
            })
        })
        sections[dist].querySelectorAll('.fadeable').forEach( element => {
            $(element).delay(300).fadeIn('slow');
        })
    //     setInterval(currentlyAnimating = 0, 600);
    // }
}

//Touch scrolling turns everything visible, since the scrolling doesn't work the same.
//Maybe some day I'll learn how to fix this.

// window.addEventListener('touchstart', event => {
//     document.querySelectorAll('.fadeable').forEach(element => {
//         $(element).fadeIn('fast');
//     })
// })

sections.forEach( (element, index) => {
    element.id = `sectionElement${index}`
})

//Check if I'm scrolled equal to or between each section
$(document).on('scroll', function() {
    if($(this).scrollTop()>=$(`#sectionElement${dist}`).position().top){
        if (dist < sections.length-1) {
            dist += 1;
            arrowColor();
        }
    }
})

//Attempted to replicate mousewheel functionality of tesla's website, didn't work out

// function changeDelayVar() {
//     console.log('hey')
//     currentlyAnimating = 0;
// }

// window.addEventListener('wheel', event => {
//     event.preventDefault();
//     // console.log(dist);
//     if (currentlyAnimating === 0) {
//         currentlyAnimating = 1;
//         // Sets dist to next section
//         if (event.deltaY > 0) {
//             if ( dist < sections.length-1) {
//                 dist += 1;
//                 // Animates a scroll to the current set distance
//                 arrowColor();
//                 $("html,body").animate({scrollTop: $(`#sectionElement${dist}`).offset().top }, 500, 'swing');
//                 // console.log(`#sectionElement${dist}`);
//             }
//         }

//         if (event.deltaY < 0) {
//             if ( dist > 0 ){
//                 dist -= 1;
//                 arrowColor();
//                 $("html,body").animate({scrollTop: $(`#sectionElement${dist}`).offset().top }, 500, 'swing');
//             }
//         }
//         setTimeout(changeDelayVar, 3000);
//     }
// });

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

console.log($(`#sectionElement${dist+2}`).position().top)
console.log($(window).height());