const express = require('express');
const RouterVideos = require('./routers/router.videos')
const RouterUsers = require('./routers/router.users')
const { config } = require('./config');
const corss = require('corss');

// import functions from midlewares errors
const { logErrors, errorHandler } = require('./middlewares/err.handler');

const app = express();

const port = config.port;

// use read data json 
app.use(express.json());

// use corss
app.use(corss());

// use routers
app.use('/videos', RouterVideos);
app.use('/users', RouterUsers);

// use middlewares erros
app.use(logErrors);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.status(200).json({
        response: 'ok',
        message: 'Hola Mundo!'
    })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})


