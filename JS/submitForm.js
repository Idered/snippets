/**
 * Add ajax support for contact form
 * @param  {jQuery selector} form Form element
 */
function submitForm(form) {

    $(form).on('submit', function() {

        $.post( ajaxurl, $(form).serialize(), function(response) {

            var response = $.parseJSON(response);

            console.log("Response: ", response);

        });

        return false;

    });

} // submitForm

/**
 * Add ajax support for contact form
 * @param  {string} ajaxurl Where to send data
 * @return {object}
 */
$.fn.submitForm = function(ajaxurl) {

    return this.on('submit', function() {

        $.post( ajaxurl, $(this).serialize(), function(response) {

            var response = $.parseJSON(response);

            console.log("Response: ", response);

        });

        return false;

    });

} // submitForm
