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


    }

    checkPos(){
        if($(window).scrollTop()>=$(this).position().top &&
        $(window).scrollTop()< ($(this).position().top + $(window).height()) ){
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
}