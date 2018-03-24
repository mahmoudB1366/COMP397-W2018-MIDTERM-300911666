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
    var PlaneLevel2 = /** @class */ (function (_super) {
        __extends(PlaneLevel2, _super);
        // Constructor
        function PlaneLevel2() {
            var _this = _super.call(this, "plane") || this;
            _this.Start();
            _this.rotation = 90;
            return _this;
        }
        // private methods
        PlaneLevel2.prototype._animationEnded = function () {
            if (this.alpha == 0) {
                this.alpha = 1;
                this.planeFlash.alpha = 0;
            }
        };
        // public methods
        // Initializes variables and creates new objects
        PlaneLevel2.prototype.Start = function () {
            this.planeFlash = new objects.PlaneFlash();
            this.planeFlash.rotation = 90;
            this.planeFlash.alpha = 1;
            this.planeFlash.on("animationend", this._animationEnded.bind(this), false);
            this.x = 50;
            this.y = 240;
        };
        // updates the game object every frame
        PlaneLevel2.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        PlaneLevel2.prototype.Reset = function () {
        };
        // move the object to some new location
        PlaneLevel2.prototype.Move = function () {
            // mouse controls
            // this.x = objects.Game.stage.mouseX;
            // keyboard controls
            if (managers.Game.keyboardManager.moveForward) {
                this.y -= 5;
            }
            if (managers.Game.keyboardManager.moveBackward) {
                this.y += 5;
            }
            this.planeFlash.x = this.x;
            this.planeFlash.y = this.y;
        };
        // check to see if some boundary has been passed
        PlaneLevel2.prototype.CheckBounds = function () {
            // Top boundary
            if (this.y <= this.halfHeight) {
                this.y = this.halfHeight;
            }
            // Buttom boundary
            if (this.y >= 480 - this.halfHeight) {
                this.y = 480 - this.halfHeight;
            }
        };
        return PlaneLevel2;
    }(objects.GameObject));
    objects.PlaneLevel2 = PlaneLevel2;
})(objects || (objects = {}));
//# sourceMappingURL=planeLevel2.js.map