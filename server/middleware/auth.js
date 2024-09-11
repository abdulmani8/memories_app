import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    // Check if the Authorization header exists
    // console.log(req.headers);
    
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      return res.status(401).json({ message: 'Authorization header missing' });
    }

    // Split the token from the header
    const token = authorizationHeader.split(' ')[1];

    // If there's no token after the "Bearer" keyword, return an error
    if (!token) {
      return res.status(401).json({ message: 'Token missing' });
    }

    // Check if the token is custom or from an OAuth provider (Google, Facebook, etc.)
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, 'test');
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'Authentication failed' });
  }
};

export default auth;
