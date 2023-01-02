const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(20);
const url = Joi.string().min(5).max(220);
const description = Joi.string()
const user_id= Joi.string();

const createVideoSchema = Joi.object({
    name: name.required(),
    url: url.required(),
    description: description,
    user_id: user_id.required()
})

const updateVideoSchema = Joi.object({
    name: name,
    url: url,
    description: description,
})

const getVideoSchema = Joi.object({
    id: id.required(),
})

module.exports = { createVideoSchema, updateVideoSchema, getVideoSchema };