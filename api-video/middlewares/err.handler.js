function logErrors (err, req, res, next) {
    console.error('Ups! error!...', err);
    next(err);
}

function errorHandler (err, req, res, next) {
    res.status(500).json({
        message: err.message,
        statusCode: 500
    })
}

module.exports = { logErrors, errorHandler };