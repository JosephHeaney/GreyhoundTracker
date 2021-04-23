import jwt from "jsonwebtoken";

const secret = 'test';

const login = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomLogin = token.length < 500;

    let decodedData;

    if (token && isCustomLogin) {      
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default login;
