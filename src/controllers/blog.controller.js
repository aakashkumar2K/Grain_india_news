import { blog } from "../models/Blog.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResonse.js";
import { asyncHandler } from "../utils/asynHandler.js";

const addBlog=asyncHandler(async(req,res)=>{
    const{heading,detail,blogImage}=req.body;
    if(!heading){
        throw new ApiError(400,'heading is required');
    }
    let Image
    if (req.files && Array.isArray(req.files.blogImage) && req.files.blogImage.length > 0) {
        Image = req.files.blogImage.path
    }
    const uploadImage = await uploadOnCloudinary(Image);
    if(!uploadImage){
        throw new ApiError(200,"image not uploaded")
    }
    const blogee = await blog.create({
       heading,
     blogImage: Image?.url || "",
        email,
        password

    })
    const createdblog= await (User.find(blogee._id))
    if (!createduser) {
        throw new ApiError(500, 'something went wrong while creating the blog');
    }
    return res.status(200).json(
        new ApiResponse(200, createdblog, 'blog created successfully')
    )
})

const deletedBlog=asyncHandler(async(req,res)=>{
    
})
export {createdblog}