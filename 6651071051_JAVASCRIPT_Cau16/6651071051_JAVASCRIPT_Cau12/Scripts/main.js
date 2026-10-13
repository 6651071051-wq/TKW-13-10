$(document).ready(function () {
$('.checkme').on('change', function () {
    var $card = $(this).closest('.checkbox-card');
    var $boxes = $card.find('.passport-box, .apply-box');
    if ($(this).is(':checked')) { $boxes.slideDown(150); }
    else { $boxes.slideUp(150); }
});
});
