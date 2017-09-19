const express = require('express'),
        sessionController = require('./controllers/session.controller');

module.exports = (app) => {

    const sessionRoute = express.Router();

    sessionRoute.post('/', sessionController.create);

    sessionRoute.get('/:roomID', sessionController.getSessionForRoom);

    app.use('/room', sessionRoute);

    app.use('/', (request, response) => {
        return response.status(200).send('Welecom to TokboxAPI');
    });
};