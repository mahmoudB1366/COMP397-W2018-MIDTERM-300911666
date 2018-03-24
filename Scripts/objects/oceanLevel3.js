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
    var OceanLevel3 = /** @class */ (function (_super) {
        __extends(OceanLevel3, _super);
        // public properties
        // Constructor
        function OceanLevel3() {
            var _this = _super.call(this, managers.Game.assetManager.getResult("ocean")) || this;
            _this.rotation = -90;
            _this.y = 480;
            _this.Start();
            return _this;
        }
        // private methods
        // reset the objects location to some value
        OceanLevel3.prototype._reset = function () {
            this.x = -800;
        };
        // move the object to some new location
        OceanLevel3.prototype._move = function () {
            this.x += this._dx;
        };
        // check to see if some boundary has been passed
        OceanLevel3.prototype._checkBounds = function () {
            if (this.x >= 0) {
                this._reset();
            }
        };
        // public methods
        // Initializes variables and creates new objects
        OceanLevel3.prototype.Start = function () {
            this._dx = 5;
            this._reset();
        };
        // updates the game object every frame
        OceanLevel3.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        return OceanLevel3;
    }(createjs.Bitmap));
    objects.OceanLevel3 = OceanLevel3;
})(objects || (objects = {}));
//# sourceMappingURL=oceanLevel3.js.map