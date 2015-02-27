;(function() {
    "use strict";

    var io = new(require('./io.js'));
    io.init();

    var canvas = new(require('./canvas.js'));
    canvas.init('#can_1');

    var draw = new(require('./draw.js'))(canvas);
    
    canvas
        .addEvent('mousedown', function(e) {
            var pos = canvas.getPosition()
            
            draw.setCoords(e.pageX - pos.left, e.pageY - pos.top);
            draw.setOnDrawing(true);

        })
        .addEvent('mousemove', function(e) {
            if ( draw.isOnDrawing()) {
                var pos = canvas.getPosition()
                
                draw.setCoords(e.pageX - pos.left, e.pageY - pos.top);
                draw.draw();                
            }
        })
        .addEvent('mouseup mouseout', function(e) {
            draw.setOnDrawing(false);
        })
        .addEvent('dblclick', function() {
            draw.erase()
        });
    ;
 })();
