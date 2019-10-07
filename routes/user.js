const Joi = require('@hapi/joi');
const userValidation = require('../joi/user');
const modelUser = require('../model/ModelUser');

const userRouter = {

  basePath: '/users',
  description: 'User router',
  routes: [
    {
      method: 'POST',
      path: '/users',
      handler: (request, h) => {
  
        const user = request.payload;
        const newUser = modelUser.save(user);
  
        return newUser;
      },
      options: {
        description: 'Create a new User',
        tags: ['api'],
        validate: {
          payload: userValidation,
          failAction: (request, h, err) => {
            if (err.isBoom && Array.isArray(err.details) && err.details.length > 0) {
              return h.response(err.output).takeover();
            }
      
            return h.response(err).takeover()
          }
        },
      },
    },
    {
      method: 'GET',
      path: '/users/{id}',
      handler: (request, h) => {
  
        const id = request.params.id;
        return modelUser.findId(id);
      },
      options: {
        description: 'Find a user by ID',
        tags: ['api'],
        validate: {
          params: Joi.object({
            id: Joi.number().min(1)
          }),
          failAction: (request, h, err) => {
            if (err.isBoom && Array.isArray(err.details) && err.details.length > 0) {
              return h.response(err.output).takeover();
            }
      
            return h.response(err).takeover()
          }
        }
      }
    },
    {
      method: 'GET',
      path: '/users',
      handler: (request, h) => {
        return modelUser.list();
      },
      options: {
        description: 'List all users',
        tags: ['api'],
        validate: {
          failAction: (request, h, err) => {
            if (err.isBoom && Array.isArray(err.details) && err.details.length > 0) {
              return h.response(err.output).takeover();
            }
      
            return h.response(err).takeover()
          }
        }
      }
    }
  ]
};

module.exports = userRouter;