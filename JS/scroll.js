// const dist = 0;

// function checkPos() {
//     if($(this).scrollTop()>=$(`#sectionElement${dist+1}`).position().top &&
//     $(this).scrollTop()<$(`#sectionElement${dist+2}`).position().top){
//         dist += 1;
//         return true;
//     }
// }

// $(document).on('scroll', function() {})

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

        this.sectionElement.addEventListener('wheel', event => {
            if (this.checkPos(this.sectionElement)) {
                this.changeClassMarker();
                this.changeArrows();
                this.fadeIn();
            }
        })

    }

    checkPos(element){
        console.log('yo');
        if($(window).scrollTop()>=$(element).position().top &&
        $(window).scrollTop()< ($(element).position().top + $(window).height()) ){
            return true;
        }
    }

    changeArrows(){
        if (this.sectionLight = 'light') {
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
                if (i < sections.length) {
                    sections[i+1].classList.add('next-section');
                }
            }
        }
        
    }

    fadeIn() {
        if(this.sectionLight == 'light') {
            this.fadableElements.forEach(element => {
                $(element).animate({
                    color: jQuery.Color("#06061C")
                }, 500, 'swing')
            })
        }
        else {
            this.fadableElements.forEach(element => {
                $(element).animate({
                    color: jQuery.Color("#E3EBED")
                }, 500, 'swing')
            })
        }
    }
}

const upArrow = document.querySelector('.arrow-up');
const downArrow = document.querySelector('.arrow-down');

downArrow.addEventListener('click', event => {
    $("html,body").animate({scrollTop: $(`.next-section`).offset().top }, 500, 'swing');
});

upArrow.addEventListener('click', event => {
    $("html,body").animate({scrollTop: $(`.previous-section`).offset().top }, 500, 'swing');
});

const sections = document.querySelectorAll('.scroll-to');

sections.forEach(element => {
    new Section(element);
})