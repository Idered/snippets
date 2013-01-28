/**
 * Placeholder fix for not supported browsers.
 */
function placeholder() {

    if(!('placeholder' in document.createElement('input'))) {
        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder'))
                input.val('').removeClass('placeholder');
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder'))
                input.val(input.attr('placeholder')).addClass('placeholder');
        }).blur();

        $('[placeholder]').parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder'))
                    input.val('');
            })
        });
    }

} // placeholder