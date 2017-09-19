const OpenTok = require('opentok'),
    config = require('../config/config'),
    opentok = new OpenTok(config.apiKey, config.apiSecret),
    dbController = require('./database.controller'),
    log = console.log;


exports.create = (req, res) => {
    let roomName = req.body.roomName;
    try {
        if (roomName) {
            opentok.createSession((err, session) => {
                if (err) {
                    return res.status(500).send({
                        'message': 'Session creation error'
                    });
                } else {
                    dbController.createRoom(roomName, session.sessionId);
                    return res.status(201).send({
                        'room': roomName,
                        'session-id': session.sessionId
                    });
                }

            });
        } else {
            return res.status(403).send({
                'error': "Room Name not provided."
            });
        }
    } catch (error) {
        log(error);
        return res.status(403).send({
            'error': "Server error."
        });
    }

};

exports.createToken = (req, res, next) => {
    console.log('createToken');
    var sessionId = res.body('sessionId');

    opentok.createToken(() => {

    });
};

exports.getSessionForRoom = (req, res, next) => {
    console.log('GetSessionForRoom');
    var roomID = req.params.roomID;
    return res.status(200).send(roomID);
};