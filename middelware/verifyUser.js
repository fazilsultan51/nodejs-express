import jwt from "jsonwebtoken";
const secretKey = "Asdf@1234";

// Middleware function to verify a JWT token
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    // Extract the token from the Authorization header
    const token = authHeader;

    // Verify the token and add the decoded payload to the request object
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        // The token is invalid or has expired
        return res.sendStatus(403);
      }

      req.user = decoded;
      next();
    });
  } else {
    // No Authorization header was found
    res.sendStatus(401);
  }
}
export default verifyToken;
