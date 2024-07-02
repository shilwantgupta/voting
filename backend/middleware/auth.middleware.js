import jwt from "jsonwebtoken";
import User from "./../model/user.model";

export const auth = async (req, res, next) => {
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        let token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "mysecretkey");
        req.user = await User.findById(decoded.id).select("-password");
        next();
      } catch (error) {
        return res
          .status(401)
          .json({ message: "Not authorized, token failed" });
      }
    } else {
      return res.status(401).json({ message: "Not authorized, no token" });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const role = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};
