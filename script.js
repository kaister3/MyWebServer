function draw(id) {
    var canvas = document.getElementById(id);
    if (canvas == null) {
        return false;
    }
    var context = canvas.getContext('2d');
    context.fillStyle = "#EEEEEF";
    context.fillRect(0, 0, 400, 300);
    context.fillStyle = "red";
    context.strokeStyle = "blue";
    context.lineWidth = 1;
    context.fillRect(50, 50, 100, 100);
    context.strokeStyle(50, 50, 100, 100);
}