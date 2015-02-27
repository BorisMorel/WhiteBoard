module.exports = function() {
    var _io; // doesn't hide io global scope
    
    this.init = function() {
        this._io = new io();
    };

    this.get = function() {
        return this._io;
    }
};
