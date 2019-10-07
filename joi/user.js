const Joi = require('@hapi/joi');

const schema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  password: Joi.string(),

  repeat_password: Joi.ref('password'),

  birth_year: Joi.number()
    .integer()
    .min(1900)
    .max(2013),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

  id: Joi.number()
});

module.exports = schema;