/**
 * Add soft scroll for specified element
 * @param  {jQuery object} $element Element that triggers scroll
 */
function softScroll($element) {

    $element.on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop:$(this.hash).offset().top
        }, 500);

    });
} // softScroll