/**
 * Add soft scroll for specified element
 * @param  {jQuery selector} element Element that triggers scroll
 */
function softScroll(element) {

    $(element || 'a[href^=#]').on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop:$(this.hash).offset().top
        }, 500);

    });

} // softScroll