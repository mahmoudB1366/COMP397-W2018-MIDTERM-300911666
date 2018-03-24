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
    var IslandLevel3 = /** @class */ (function (_super) {
        __extends(IslandLevel3, _super);
        // private instance variables
        // public properties
        // Constructor
        function IslandLevel3() {
            var _this = _super.call(this, "island") || this;
            _this.Start();
            _this.rotation = -90;
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        IslandLevel3.prototype.Start = function () {
            this._dx = 5;
            this.Reset();
        };
        // updates the game object every frame
        IslandLevel3.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        IslandLevel3.prototype.Reset = function () {
            this.y = Math.floor((Math.random() * (480 - this.width)) + this.halfWidth);
            this.x = 0 - this.width;
        };
        // move the object to some new location
        IslandLevel3.prototype.Move = function () {
            this.x += this._dx;
        };
        // check to see if some boundary has been passed
        IslandLevel3.prototype.CheckBounds = function () {
            // check Right bounds
            if (this.x >= 640 + this.width) {
                this.Reset();
            }
        };
        return IslandLevel3;
    }(objects.GameObject));
    objects.IslandLevel3 = IslandLevel3;
})(objects || (objects = {}));
//# sourceMappingURL=islandLevel3.js.map