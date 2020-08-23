const roomsModel = require('../models/rooms.model')

module.exports.createRoom=async (req, res) => {
    let newRoom={
        title:req.body.title,
        admin:req.signedCookies.userID,
        members:[req.signedCookies.userID]
    }
    console.log(newRoom);
    res.send(newRoom);
    
}