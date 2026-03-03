const Rover=require("../models/rover.model");
const {rotateLeft,rotateRight}=require("../utils/direction.util");


class RoverService{
  static executeRover(plateau,position,instructions){
    const {maxX,maxY}=plateau;
    const rover=new Rover(position.x,position.y,position.direction);

    if(rover.x>maxX || rover.y>maxY) {
      const error=new Error("Rover starting position is outside plateau");
      error.statusCode=400;
      throw error;
    }

    for(let command of instructions){
      switch(command){
        case "L":
          rover.direction=rotateLeft(rover.direction);
          break;

        case "R":
          rover.direction=rotateRight(rover.direction);
          break;

        case "M":
          this.move(rover,maxX,maxY);
          break;
      }
    }
    return rover;
  }

  static move(rover,maxX,maxY){
    let newX=rover.x;
    let newY=rover.y;

    switch(rover.direction){
      case "N":
        newY++;
        break;
      case "S":
        newY--;
        break;
      case "E":
        newX++;
        break;
      case "W":
        newX--;
        break;
    }

    if(newX>=0 && newX<=maxX && newY>=0 && newY<=maxY){
      rover.x=newX;
      rover.y=newY;
    }
  }
}

module.exports=RoverService;
