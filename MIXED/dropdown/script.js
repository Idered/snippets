(function($) {

    $('.dropdown').each(function() {

        var $this = $(this);

        $(this).find('.dropdown__toggle').on('click', function(event) {

            event.stopPropagation();

            $this.toggleClass('is-open');

        });

    });

    $(document).on('click', function() {

        $('.is-open').removeClass('is-open');

    });


})(jQuery);