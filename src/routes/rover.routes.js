const express=require("express");
const Rovercontroller=require("../controllers/rover.controller");

const router=express.Router();

router.post("/execute",Rovercontroller.execute);

module.exports=router;
