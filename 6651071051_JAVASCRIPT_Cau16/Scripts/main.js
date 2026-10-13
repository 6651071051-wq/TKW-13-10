$(document).ready(function () {
if ($.fn.datepicker) {
    $('#datepicker').datepicker({ dateFormat: 'dd/mm/yy', changeMonth: true, changeYear: true, yearRange: '1950:+0', maxDate: 0 });
}

function validDate(s) {
    var m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(s);
    if (!m) return false;
    var d = new Date(+m[3], +m[2] - 1, +m[1]);
    return d.getFullYear() === +m[3] && d.getMonth() === +m[2] - 1 && d.getDate() === +m[1] && d <= new Date();
}

$('.add-row').on('click', function () {
    var name = $.trim($('#name').val());
    var email = $.trim($('#email').val());
    var birth = $.trim($('#datepicker').val());
    if (!name) { alert('Vui lòng nhập Name'); return; }
    if (!/^[\w.+-]+@[\w-]+(\.[\w-]+)+$/.test(email)) { alert('Email không đúng định dạng'); return; }
    if (!validDate(birth)) { alert('Birthdate không hợp lệ (dd/mm/yyyy)'); return; }
    var $tr = $('<tr><td><input type="checkbox" name="record"></td></tr>');
    $tr.append($('<td>').text(name), $('<td>').text(email), $('<td>').text(birth));
    $('table tbody').append($tr);
    $('#name, #email, #datepicker').val('');
});

$('.delete-row').on('click', function () {
    var $checked = $('table tbody input[name="record"]:checked');
    if (!$checked.length) { alert('Hãy chọn hàng cần xóa'); return; }
    $checked.closest('tr').remove();
});
});
