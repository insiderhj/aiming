function changePos() {
    var xPos = Math.floor(Math.random() * (700 - $('#circle').width()));
    var yPos = Math.floor(Math.random() * (400 - $('#circle').height()));
    $('#circle').css('left', xPos);
    $('#circle').css('top', yPos);
}

$(document).ready(function() {
    changePos();
    
    $('#circle').click(function() {
        $('#cur_score').text(Number($('#cur_score').text()) + 1);
        $('#circle').css('width', $('#circle').width() * 0.98);
        changePos();
    });
    
    $(".timer pre").text("30");
});
