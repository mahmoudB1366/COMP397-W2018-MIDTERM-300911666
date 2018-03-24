module objects {
    export class OceanLevel2 extends createjs.Bitmap {
      // private instance variables
      private _dx: number;
  
      // public properties
  
      // Constructor
      constructor() {
        super(managers.Game.assetManager.getResult("ocean"));
        this.rotation = -90;
        this.y = 480;
        this.Start();
      }
  
      // private methods
  
      // reset the objects location to some value
      private _reset():void {
        this.x = 0;
      }
  
      // move the object to some new location
      private _move():void {
        this.x -= this._dx;
      }
  
      // check to see if some boundary has been passed
      private _checkBounds():void {
        if(this.x <=-800) {
          this._reset();
        }
      }
  
      // public methods
  
      // Initializes variables and creates new objects
      public Start():void {
        this._dx = 5;
        this._reset();
      }
  
      // updates the game object every frame
      public Update():void {
        this._move();
        this._checkBounds();

      }
    }
  }
  