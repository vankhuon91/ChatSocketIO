const usersModel = require('../models/users.model')
const md5 = require('md5');

module.exports.login=async (req, res) => {
    let newUser=req.body;

    let existsUser=await usersModel.findOne(newUser);
   // console.log(existsUser);
    if (!existsUser) {
        res.status(403).send('Wrong user or password');
    }
    else {
        console.log(newUser)
        res.cookie("userID",existsUser._id,{signed:true,sameSite:'Lax', secure: true })
        res.json('Login sucessfully');
    }

    
}
module.exports.signup=async (req, res) => {
    let newUser=req.body;
    let existsUser=await usersModel.findOne({"user":newUser.user});
   // console.log(existsUser);
    if (existsUser) {
        
        res.status(403).send('User is exists');
    }
    else {
        await usersModel.create(newUser);
        res.status(200).send('SignUp successfuly');
    }
}

module.exports.au=async (req, res) => {
    let userID=req.signedCookies.userID
    if (!userID) {
        res.status(403).send('not permission')
    }
    let user=await usersModel.findById(userID).lean();
    delete user.pass;
    console.log(user)
    res.send(user)
}




