$(document).ready(function () {
// ON  = nền sáng (on.png), OFF = nền tối (off.png)
function applyTheme() {
    var isOn = $('#myonoffswitch').is(':checked');
    $('.image-effect img[src*="on.png"]').toggleClass('fadeEffect', isOn);
    $('.image-effect img[src*="off.png"]').toggleClass('fadeEffect', !isOn);
    $('body').toggleClass('light', isOn).toggleClass('dark', !isOn);
}
$('#myonoffswitch').on('change', applyTheme);
applyTheme();
});
