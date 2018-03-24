module objects {
    export class IslandLevel3 extends objects.GameObject {
      // private instance variables
  
      // public properties
  
      // Constructor
      constructor() {
        super("island");
        this.Start();
        this.rotation = -90;
      }
  
      // private methods
  
      // public methods
  
      // Initializes variables and creates new objects
      public Start():void {
        this._dx = 5;
        this.Reset();
      }
  
      // updates the game object every frame
      public Update():void {
        this.Move();
        this.CheckBounds();
      }
  
      // reset the objects location to some value
      public Reset():void {
        this.y = Math.floor((Math.random() * (480 - this.width)) + this.halfWidth);
        this.x = 0 - this.width;
      }
  
      // move the object to some new location
      public Move():void {
        this.x += this._dx;
      }
  
      // check to see if some boundary has been passed
      public CheckBounds():void {
        // check Right bounds
        if(this.x >= 640 + this.width) {
          this.Reset();
        }
      }
    }
  }
  