import jwt from "jsonwebtoken";

export const GenerateToken = (data) => {
    let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: data
      }, process.env.JWT_SECRET_KEY);
    
    return token;
}


