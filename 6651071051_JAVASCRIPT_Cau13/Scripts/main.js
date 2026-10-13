$(document).ready(function () {
$('.password-show').on('click', function () {
    var $input = $('.input-control');
    var show = $input.attr('type') === 'password';
    $input.attr('type', show ? 'text' : 'password');
    $(this).toggleClass('fa-eye', !show).toggleClass('fa-eye-slash', show);
});
});
