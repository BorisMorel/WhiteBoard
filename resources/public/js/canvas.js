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
