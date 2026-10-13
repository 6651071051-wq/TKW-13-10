$(document).ready(function () {
function showTab(id) {
    $('.tab li').removeClass('active');
    $('.tab a[href="' + id + '"]').parent().addClass('active');
    $('.tab-item').hide();
    $(id).fadeIn(150);
}
$('.tab a').on('click', function (e) {
    e.preventDefault();
    showTab($(this).attr('href'));
});
showTab('#tab-main-info');
});
