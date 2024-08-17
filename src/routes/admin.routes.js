import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
//import { registerUser,login,logout,getUser,changePassword
// } from "../controllers/usercontroller.js";
//import { verifyJwt } from "../middlewares/authenticate.middleware.js";
import { verifyJwt } from "../middlewares/authenticate.middleware.js";
import { login,logout,createAdmin,changePassword } from "../controllers/admin.controller.js";
const router=Router();
router.route("/createAdmin").post(createAdmin)
router.route("/login").post(login);
router.route("/logout").post(verifyJwt,logout);
router.route("/changePassword").post(verifyJwt,changePassword);
export default router;
