const jwt = require('jsonwebtoken');
const User = require('../Models/User');

const authenticate = async(req,res,next)=>{
    const token = await req.header("Authorization")?.split(' ')[1];

    if(!token)
        return res.status(401).json({message:'No token, authorization denied'});

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({message:'Token is not valid'});
    }
};

module.exports = authenticate;