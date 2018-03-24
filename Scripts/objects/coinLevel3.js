var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var CoinLevel3 = /** @class */ (function (_super) {
        __extends(CoinLevel3, _super);
        // private instance variables
        // public properties
        // constructors
        function CoinLevel3() {
            var _this = _super.call(this, "coin") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        CoinLevel3.prototype.Start = function () {
        };
        CoinLevel3.prototype.Update = function () {
            this.CheckBounds();
        };
        CoinLevel3.prototype.CheckBounds = function () {
            if (this.x < (0 - this.width)) {
                this.alpha = 1;
            }
        };
        return CoinLevel3;
    }(objects.GameObject));
    objects.CoinLevel3 = CoinLevel3;
})(objects || (objects = {}));
//# sourceMappingURL=coinLevel3.js.map