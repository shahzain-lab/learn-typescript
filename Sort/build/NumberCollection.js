"use strict";
exports.__esModule = true;
exports.NumberCollection = void 0;
var NumberCollection = /** @class */ (function () {
    function NumberCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumberCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumberCollection.prototype.compare = function (leftInd, rightInd) {
        return this.data[leftInd] > this.data[rightInd];
    };
    NumberCollection.prototype.swap = function (leftInd, rightInd) {
        var leftHand = this.data[leftInd];
        this.data[leftInd] = this.data[rightInd];
        this.data[rightInd] = leftHand;
    };
    return NumberCollection;
}());
exports.NumberCollection = NumberCollection;
var numberCollection = new NumberCollection([12, -7, 43, 0, -78]);
numberCollection.length;
