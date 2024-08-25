import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { MdCloudUpload, MdCheckCircle, MdError } from 'react-icons/md';

const AddImage = () => {
    const [imageData, setImageData] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    const handleAddImage = async () => {
        if (!imageData) {
            toast.error('Image is required');
            return;
        }
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
        if (!allowedTypes.includes(imageData.type)) {
            toast.error('Only .jpg, .jpeg, .webp and .png files are allowed');
            return;
        }

        const formData = new FormData();
        formData.append('cImage', imageData);

        setIsUploading(true);
        try {
            await axios.post('http://localhost:8000/api/v1/crousel/addCrousel', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success('Image added successfully!');
            clearForm();
        } catch (error) {
            toast.error(error.response?.data?.message || 'Error uploading image');
            console.error('Error adding image:', error);
        }
        setIsUploading(false);
    };

    const clearForm = () => {
        setImageData(null);
    };

    return (
        
        <div className='relative'>
            <div className= 'absolute top-[100px] right-[500px]  bg-white p-6 rounded-lg shadow-lg  max-w-lg'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-700 flex items-center'>
                    <MdCloudUpload className='mr-2 text-gray-700' /> Add Image
                </h2>
                <input 
                    type="file" 
                    onChange={(e) => setImageData(e.target.files[0])} 
                    className='block w-full text-gray-700 bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
                <button 
                    onClick={handleAddImage} 
                    disabled={isUploading} 
                    className={`w-full flex items-center justify-center py-2 px-4 rounded-lg text-white 
                        ${isUploading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                    {isUploading ? (
                        <span>Uploading...</span>
                    ) : (
                        <>
                            <MdCloudUpload className='mr-2 text-xl' />
                            Upload Image
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};


export default AddImage

