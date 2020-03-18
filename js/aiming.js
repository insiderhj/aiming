function changePos() {
    var xPos = Math.floor(Math.random() * 700);
    var yPos = Math.floor(Math.random() * 400);
    //TODO
}

$(document).ready(function() {
    changePos();
});

$('#circle').click(function() {
    $('#cur_score').text(Number($('#cur_score').text()) + 1);
    changePos();
});
