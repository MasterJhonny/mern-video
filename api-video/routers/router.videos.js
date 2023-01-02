const express = require('express');

const router = express.Router();

const { VideosService } = require('../services/service.videos');
const { createVideoSchema, updateVideoSchema, getVideoSchema } = require('../schemas/schema.videos');
const { validatorHandler } = require('../middlewares/validator.handler');

const service = new VideosService();

// routers
router.get('/', async (req, res, next) => {
    try {
        const videos = await service.find();
        res.status(200).json(videos);
    } catch (error) {
        next(error);
    }
})

// find videos
router.get('/:id', 
    validatorHandler(getVideoSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const video = await service.findById(id);
            res.status(200).json(video);
        } catch (error) {
            next(error);
        }
    }
)

// find videos by user_id
router.get('/user/:id', 
    // validatorHandler(getVideoSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const video = await service.getVideosByUserId(id);
            res.status(200).json(video);
        } catch (error) {
            next(error);
        }
    }
)

// create 
router.post('/', 
    validatorHandler(createVideoSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const id = await service.create(body);
            res.json({
                message: 'create ok!',
                id
            })
        } catch (error) {
            next(error);
        }
    }
)

router.patch('/:id',
validatorHandler(getVideoSchema, 'params'),
validatorHandler(updateVideoSchema, 'body'),
async(req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const newVideo = await service.update(id, data);
        res.json({
            message: 'update ok!',
        })
    } catch (error) {
        next(error);
        res.json({
            message: error.message,
        })
    }
})


router.delete('/:id', 
validatorHandler(getVideoSchema, 'params'),
async (req, res, next) => {
    try {
        const { id } = req.params;
        const rta = await service.delete(id);
        res.json({
            message: 'delete ok!',
            id
        })
    } catch (error) {
        next(error);
        res.json({
            message: error.message,
        })
    }
})


module.exports = router;