/**
 * Add ajax support for contact form
 * @param  {jQuery object} $form Form element
 */
function submitForm($form) {

    $form.on('submit', function() {

        $.post( ajaxurl, $form.serialize(), function(response) {

            var response = $.parseJSON(response);

            console.log("Mail submission status: ", response);

        });

    return false;

    });

} // contactForm