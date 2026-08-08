//req->get jwt from req ->verify JWT ->valid? continue to API : invalid

const jwt = require("jsonwebtoken")

//create the middleware fn

const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {                //check the actual token is provided or not
        return res.status(401).json({
            message: "No token provided"
        });
    }

    const token = authHeader.split(" ")[1];      //extract the token

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
       // console.log("DECODED TOKEN =", decoded);
        req.user = decoded.id;
         
        //console.log("Authenticated user:", req.user);
        next();
    }catch(error){
        return res.status(401).json({
            message:"Invalid or expired token"
        });
    }
};

module.exports = authMiddleware;
