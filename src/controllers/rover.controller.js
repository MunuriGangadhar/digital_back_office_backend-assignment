const RoverService=require("../services/rover.service");
const {requestSchema}=require("../validations/rover.validation");

class RoverController{
  static execute(req,res,next){
    try{
      const {error}=requestSchema.validate(req.body);

      if(error){
        return res.status(400).json({
          success: false,
          message: error.details[0].message,
        });
      }

      const {plateau,rovers}=req.body;

      const results=rovers.map((roverData)=>{
        const finalRover=RoverService.executeRover(
          plateau,
          roverData.position,
          roverData.instructions
        );

        return {
          x: finalRover.x,
          y: finalRover.y,
          direction: finalRover.direction,
        };
      });

      return res.status(200).json({
        success:true,
        data:results,
      });
    } catch(err){
      next(err);
    }
  }
}

module.exports=RoverController;