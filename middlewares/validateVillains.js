const Joi = require('joi');

const villainSchema = Joi.object({
  name: Joi.string().required(),
  realName: Joi.string().required(),
  age: Joi.number(),
  powers: Joi.array().items(Joi.string()),
  city: Joi.string(),
  dangerLevel: Joi.number().required(),
  numberOfMovies: Joi.number(),
  isCaptured: Joi.boolean(),
  universe: Joi.string().required(),
});

const validateVillain = (req, res, next) => {
  const { error } = villainSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  next();
};

module.exports = validateVillain;
