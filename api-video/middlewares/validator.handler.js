function validatorHandler(schema, property) {
    return (req, res, next) => {
        const data = req[property];
        const { error } = schema.validate(data, { aborEarly: false });
        if (error) {
            next(error);
        } 
        next();
    }
}

module.exports = {validatorHandler};