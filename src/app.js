const express=require("express");
const roverRoutes=require("./routes/rover.routes");
const errorMiddleware=require("./middlewares/error.middleware");
const app=express();

app.use(express.json());
app.use("/api/rovers",roverRoutes);
app.use(errorMiddleware);


module.exports=app;