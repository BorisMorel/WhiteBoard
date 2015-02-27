(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./canvas.js":2,"./draw.js":3,"./io.js":4}],2:[function(require,module,exports){
module.exports = function() {
    var canvas; // Dom
    var $_canvas; // Jquery object
    var ctx; // Canvas context
    
    this.init = function(domId) {
        this.$_canvas = $(domId);
        this.canvas = this.$_canvas.get(0);
        this.ctx = this.canvas.getContext('2d');
    };

    this.getJqueryObject = function() {
        return this.$_canvas;
    };

    this.getDom = function() {
        return this.canvas;
    };

    this.getContext = function() {
        return this.canvas.getContext('2d');
    };

    this.getPosition = function() {
        return this.$_canvas.position();
    };

    this.getDimension = function() {
        return {height: this.$_canvas.height(), width: this.$_canvas.width()};
    };
    
    this.addEvent = function(event, callback) {
        this.$_canvas.on(event, callback);
        
        return this;
    };
};

},{}],3:[function(require,module,exports){
module.exports = function(canvas) {
    var coords = {};
    var prevCoords = {};
    
    this.canvas = canvas;
    
    this.setCoords = function(x,y) {
        this.prevCoords = this.coords;
        this.coords = {left: x, top: y};

        return this;
    };

    this.getCoords = function() {
        return this.coords;
    };

    this.setOnDrawing = function(bool) {
        this.onDrawing = bool;
    };

    this.isOnDrawing = function() {
        return this.onDrawing === true;
    };

    this.draw = function() {
        var ctx = canvas.getContext();

        ctx.beginPath();
        ctx.moveTo(this.prevCoords.left, this.prevCoords.top);
        ctx.lineTo(this.coords.left, this.coords.top);
        ctx.closePath();
        ctx.stroke();
    };

    this.erase = function() {
        dimension = this.canvas.getDimension()

        canvas.getContext().clearRect(0, 0, dimension.width, dimension.height);
    };
};

},{}],4:[function(require,module,exports){
module.exports = function() {
    var _io; // doesn't hide io global scope
    
    this.init = function() {
        this._io = new io();
    };

    this.get = function() {
        return this._io;
    }
};

},{}]},{},[1]);
