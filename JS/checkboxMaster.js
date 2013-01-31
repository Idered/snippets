/**
 * Un/Select multiple checkboxes using one checkbox
 * @param  {jQuery selector} master Checkbox that control others
 * @param  {jQuery selector} list   List of checkboxes
 */
function checkboxMaster(master, list) {

    $(master).on('click', function() {
        $(list).prop('checked', $(this).prop('checked'));
    });

} // checkboxMaster

/**
 * Un/Select multiple checkboxes using one checkbox
 * @param  {jQuery selector} $list List of checkboxes
 * @return {object}
 */
$.fn.checkboxMaster = function(list) {

    return this.on('click', function() {
        $(list).prop('checked', $(this).prop('checked'));
    });

} // checkboxMaster
