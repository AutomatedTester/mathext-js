function Mathext () {
}

Mathext.prototype.toRadians = function(degrees) {
    return (degrees * (Math.PI/180)).toFixed(3);
};

Mathext.prototype.toDegrees = function(radians) {
    return (radians * (180/Math.PI)).toFixed(2);
};
module.exports = new Mathext();