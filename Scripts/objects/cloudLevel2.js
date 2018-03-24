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
    var CloudLevel2 = /** @class */ (function (_super) {
        __extends(CloudLevel2, _super);
        // private instance variables
        // public properties
        // Constructor
        function CloudLevel2() {
            var _this = _super.call(this, "cloud") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        CloudLevel2.prototype.Start = function () {
            this.Reset();
        };
        // updates the game object every frame
        CloudLevel2.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        CloudLevel2.prototype.Reset = function () {
            this.y = Math.floor((Math.random() * (480 - this.width)) + this.halfWidth);
            this.x = 640 + this.height;
            this._dx = Math.floor((Math.random() * 4) - 2);
            this._dy = Math.floor((Math.random() * 5) + 5);
        };
        // move the object to some new location
        CloudLevel2.prototype.Move = function () {
            this.y += this._dy;
            this.x += this._dx;
        };
        // check to see if some boundary has been passed
        CloudLevel2.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.y <= 0 - this.height) {
                this.Reset();
            }
        };
        return CloudLevel2;
    }(objects.GameObject));
    objects.CloudLevel2 = CloudLevel2;
})(objects || (objects = {}));
//# sourceMappingURL=cloudLevel2.js.map