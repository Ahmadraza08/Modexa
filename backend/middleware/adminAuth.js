// import jwt from 'jsonwebtoken'

// const adminAuth = async (req, res, next) => {
//     try {
//         const { token } = req.headers;
//         if (!token) {
//             return res.json({ success: false, message: "Not Authorized Login Again" });
//         }
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET);

//         if (token_decode !== process.env.ADMIN_EMAIL + process.env.JWT_SECRET) {
//             return res.json({ success: false, message: "Not Authorized Login Again" });
//         }
//         next();

//     } catch (error) {

//         console.log(error);
//         res.json({ success: false, message: error.message });

//     }
// }

// export default adminAuth;

import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
  try {
    const token = req.headers['authorization']; // better practice: Bearer token
    if (!token) return res.status(401).json({ success: false, message: "Not Authorized. Login Again" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the user is the admin
    if (decoded.email !== process.env.ADMIN_EMAIL || decoded.role !== 'admin') {
      return res.status(403).json({ success: false, message: "Not Authorized. Admin Access Only" });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ success: false, message: "Token Invalid or Expired" });
  }
};

export default adminAuth;
