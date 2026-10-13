$(document).ready(function () {
$('h3').on('click', function () {
    var $box = $(this).next('.box');
    $('.box').not($box).slideUp();   // ẩn các nội dung khác
    $box.slideToggle();              // mở / đóng nội dung của tiêu đề vừa click
});
});
