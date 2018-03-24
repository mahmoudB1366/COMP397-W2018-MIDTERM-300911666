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
    var CloudLevel3 = /** @class */ (function (_super) {
        __extends(CloudLevel3, _super);
        // private instance variables
        // public properties
        // Constructor
        function CloudLevel3() {
            var _this = _super.call(this, "cloud") || this;
            _this.Start();
            _this.rotation = -90;
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        CloudLevel3.prototype.Start = function () {
            this.Reset();
        };
        // updates the game object every frame
        CloudLevel3.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        CloudLevel3.prototype.Reset = function () {
            this.y = Math.floor((Math.random() * (480 - this.width)) + this.halfWidth);
            this.x = 0 - this.width;
            this._dy = Math.floor((Math.random() * 4) - 2);
            this._dx = Math.floor((Math.random() * 5) + 5);
        };
        // move the object to some new location
        CloudLevel3.prototype.Move = function () {
            this.y += this._dy;
            this.x += this._dx;
        };
        // check to see if some boundary has been passed
        CloudLevel3.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.x >= 640 + this.height) {
                this.Reset();
            }
        };
        return CloudLevel3;
    }(objects.GameObject));
    objects.CloudLevel3 = CloudLevel3;
})(objects || (objects = {}));
//# sourceMappingURL=cloudLevel3.js.map