import { admin } from "../models/admin.model.js";
import { asyncHandler } from "../utils/asynHandler.js";
import apiError from "../utils/apiError.js";

const generateAccessAndRefereshTokens = async (user_id) => {
    try {
        const Admin = await admin.findById(user_id);

        const accessToken = admin.generateAccessToken();
        // console.log(accessToken);
        const refreshToken = admin.generateRefreshToken();
        Admin.refreshToken = refreshToken;
        await Admin.save({
            validateBeforeSave: false
        })
        return { accessToken, refreshToken };
    } catch (error) {
        throw new apiError(500, "someThing went wrong while generating token");
    }

}
const createAdmin=asyncHandler(async(req,res)=>{
  const {userName,fullName,password,email} =req.body
  if ([fullName, password, userName, password].some((field) =>
    field?.trim() === ""
)) {
    throw new ApiError(400, "all fiels are required");
}
const existedUser = await admin.findOne({
    $or: [{ email }, { userName }]
})
if (existedUser) {
    throw new ApiError(400, 'user already exists')
}
const user = await admin.create({
    userName: userName.toLowerCase(),
    fullName,
    email,
    password

})
const createduser = await (admin.find(user._id).select(
    "-password -refreshToken"
))
if (!createduser) {
    throw new ApiError(500, 'something went wrong while registring the user');
}
return res.status(200).json(
    new ApiResponse(200, createduser, 'admin registered successfully')
)
})

export default{createAdmin};