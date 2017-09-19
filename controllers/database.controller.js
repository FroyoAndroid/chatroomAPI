const config = require('../config/config'),
        Room = require('../models/room');

exports.createRoom = function (roomName, sessionID) {

        let room = new Room({
            room: roomName,
            sessionID: sessionID
        });
        
        room.save(function(error, room){
            if(error){
                throw error;
            }
            console.log('Room', room);
        });

};