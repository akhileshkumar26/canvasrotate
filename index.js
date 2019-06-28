function draw() {
    var canvas = document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    
    // left rectangles, rotate from canvas origin
    ctx.save();
    // blue rect
    ctx.fillStyle = "#0095DD";
    ctx.fillRect(100, 100, 100, 100); 
    ctx.rotate((Math.PI / 180) * 5);
   


    ctx.fillStyle = '#4D4E53';
    ctx.fillRect(100, 100, 100, 100);
    ctx.restore();





}