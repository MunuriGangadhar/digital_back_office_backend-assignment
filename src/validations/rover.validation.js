const Joi=require("joi");

const roverSchema=Joi.object({
  position: Joi.object({
    x:Joi.number().integer().min(0).required(),
    y:Joi.number().integer().min(0).required(),
    direction:Joi.string().valid("N", "E", "S", "W").required(),
  }).required(),

  instructions:Joi.string()
    .pattern(/^[LRM]+$/)
    .required(),
});

const requestSchema=Joi.object({
  plateau:Joi.object({
    maxX:Joi.number().integer().min(0).required(),
    maxY:Joi.number().integer().min(0).required(),
  }).required(),

  rovers:Joi.array().items(roverSchema).min(1).required(),
});

module.exports={requestSchema};
