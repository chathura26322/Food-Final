// import jwt from "jsonwebtoken";

// const authMiddleware = async (req, res, next) => {
//   const { token } = req.headers;
//   if (!token) {
//     return res.json({ success: false, message: "Not Authorized Login Again" });
//   }
//   try {
//     const token_decode = jwt.verify(token, process.env.JWT_SECRET);
//     req.body.userId = token_decode.id;
//     next();
//   } catch (error) {
//     return res.json({ success: false, message: error.message });
//   }
// };

// export default authMiddleware;
import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization; // Use 'authorization' header
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.json({ success: false, message: "Not Authorized, Login Again" });
  }

  const token = authHeader.split(" ")[1]; // Extract the token (after 'Bearer ')

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    req.body.userId = token_decode.id; // Assign user ID from decoded token
    next();
  } catch (error) {
    return res.json({ success: false, message: "Invalid or Expired Token" });
  }
};

export default authMiddleware;
