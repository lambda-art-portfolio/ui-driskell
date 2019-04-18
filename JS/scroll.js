// const dist = 0;

// function checkPos() {
//     if($(this).scrollTop()>=$(`#sectionElement${dist+1}`).position().top &&
//     $(this).scrollTop()<$(`#sectionElement${dist+2}`).position().top){
//         dist += 1;
//         return true;
//     }
// }

// $(document).on('scroll', function() {})

let currentlyAnimating = 0;

class Section {
    constructor(sectionElement){
        this.sectionElement = sectionElement;

        this.sectionLight = this.sectionElement.dataset.light;

        this.sectionPos = this.sectionElement.dataset.position;

        this.fadableElements = this.sectionElement.querySelectorAll('.fadeable');

        this.checkPos = this.checkPos.bind(this);

        this.changeArrows = this.changeArrows.bind(this);

        this.changeClassMarker = this.changeClassMarker.bind(this);

        this.fadeIn = this.fadeIn.bind(this);

        this.callMethods = this.callMethods.bind(this);

        this.callMethods();

        window.addEventListener('wheel', event => {
            this.callMethods();
        })

        window.addEventListener('fake-event', event => {
            this.callMethods();
        })

    }

    checkPos(element){
        if(($(window).scrollTop() + ($(window).height()/2))>=$(element).position().top &&
        ($(window).scrollTop() + ($(window).height()/2))< ($(element).position().top + $(window).height()) ){
            return true;
        }
        else {
            return false;
        }
    }

    changeArrows(){
        // console.log(currentlyAnimating);
        if (currentlyAnimating == 0) {
            currentlyAnimating = 1;
            if (this.sectionLight == 'light') {
                if (this.sectionPos == 'bottom') {
                    $('.arrow-down').animate({
                        color: jQuery.Color({alpha: 0})
                    }, 100, 'swing')
                    $('.arrow-up').animate({
                        color: jQuery.Color("#06061C")
                    }, 500, 'swing')
                }
                else if (this.sectionPos == 'top') {
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
                if (this.sectionPos == 'bottom') {
                    $('.arrow-down').animate({
                        color: jQuery.Color({alpha: 0})
                    }, 100, 'swing')
                    $('.arrow-up').animate({
                        color: jQuery.Color("#E3EBED")
                    }, 500, 'swing')
                }
                else if (this.sectionPos == 'top') {
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
            setTimeout(function() {
                currentlyAnimating = 0;
            }, 300);
        }
    }

    //removes specific IDs from all elements, adds IDs to correct elements.
    changeClassMarker() {

        if (!this.sectionElement.classList.contains('current-section')) {
            sections.forEach( element => {
                element.classList.remove('current-section');
                element.classList.remove('next-section')
                element.classList.remove('previous-section')
            })
            this.sectionElement.classList.add('current-section');
        }

        for (let i = 0; i<sections.length; i++) {
            if (sections[i].classList.contains('current-section')) {
                if (i >0) {
                    sections[i-1].classList.add('previous-section');
                }
                if (i < sections.length-1) {
                    sections[i+1].classList.add('next-section');
                }
            }
        }
        
    }

    fadeIn() {
        // console.log(this.fadableElements);
        this.fadableElements.forEach(element => {
            $(element).delay(100).fadeIn('slow')
        });
    }

    callMethods() {
        if (this.checkPos(this.sectionElement)) {
            // console.log(this.checkPos(this.sectionElement));
            this.changeClassMarker();
            this.changeArrows();
            this.fadeIn();
            // console.log(this.sectionLight + ' ' + this.sectionPos)
        }
    }
}

const upArrow = document.querySelector('.arrow-up');
const downArrow = document.querySelector('.arrow-down');

var fakeEvent = new CustomEvent("fake-event", { "solution": "Bad" });

downArrow.addEventListener('click', event => {
    $("html,body").animate({scrollTop: $(`.next-section`).offset().top }, 500, 'swing');
    setTimeout(function () {
        window.dispatchEvent(fakeEvent);
    },500)
});

upArrow.addEventListener('click', event => {
    $("html,body").animate({scrollTop: $(`.previous-section`).offset().top }, 500, 'swing');
    setTimeout(function () {
        window.dispatchEvent(fakeEvent);
    },500)
});

const sections = document.querySelectorAll('.scroll-to');

sections.forEach(element => {
    new Section(element);
})

window.addEventListener('wheel', element => {
    console.log('yo');
})