$(document).ready(function () {
$('#fileupload').on('change', function () {
    var f = this.files[0];
    if (!f) { $('.filename').text('Ex:sample.jpg'); $('#ext').text(''); return; }
    var i = f.name.lastIndexOf('.');
    var name = i > 0 ? f.name.substring(0, i) : f.name;
    var ext = i > 0 ? f.name.substring(i + 1) : '(không có)';
    $('.filename').text('Tên file: ' + name).css('color', '#333');
    $('#ext').text('Phần mở rộng: .' + ext);
});
});
