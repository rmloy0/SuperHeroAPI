const Joi = require('joi');

const superHeroSchema = Joi.object({
  name: Joi.string().required(),
  realName: Joi.string().required(),
  age: Joi.number(),
  powers: Joi.array().items(Joi.string()),
  city: Joi.string(),
  team: Joi.string(),
  numberOfMovies: Joi.number(),
  powerLevel: Joi.number().required(),
  universe: Joi.string().required(),
});

const validateSuperHero = (req, res, next) => {
  const { error } = superHeroSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  next();
};

module.exports = validateSuperHero;
