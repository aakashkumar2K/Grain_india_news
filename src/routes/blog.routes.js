import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
//import { registerUser,login,logout,getUser,changePassword
// } from "../controllers/usercontroller.js";
//import { verifyJwt } from "../middlewares/authenticate.middleware.js";
import { verifyJwt } from "../middlewares/authenticate.middleware.js";
import { login,logout,createAdmin,changePassword } from "../controllers/admin.controller.js";
import { addBlog, deletedBlog, updateBlog } from "../controllers/blog.controller.js";
const blogrouter=Router();
blogrouter.route("/addBlog").post(upload.single('blogImage'),verifyJwt,addBlog);
blogrouter.route("/deleteBlog").delete(verifyJwt ,deletedBlog);
blogrouter.route("/updateBlog").put(upload.single('blogImage'),verifyJwt,updateBlog);
// router.route("/createAdmin").post(createAdmin)
// router.route("/login").post(login);
// router.route("/logout").post(verifyJwt,logout);
// router.route("/changePassword").post(verifyJwt,changePassword);
export default  blogrouter;
