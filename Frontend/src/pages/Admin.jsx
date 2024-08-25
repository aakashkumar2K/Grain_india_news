import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, Outlet } from 'react-router-dom';
import { AiFillHome, AiOutlinePlus, AiOutlineEdit, AiOutlineDelete, AiOutlineLogout } from 'react-icons/ai';
import { FaImage } from 'react-icons/fa';
// import Home from './components/Home';
// import AddImage from '../components/Admin/AddImage';
// import RemoveImage from './components/RemoveImage';
// import CreateBlog from './components/CreateBlog';
// import EditBlog from './components/EditBlog';
// import RemoveBlog from './components/RemoveBlog';
// import Logout from './components/Logout';
// import BlogEditList from './components/showAllEditBlog';
// import BlogList from './components/showAllBlog';
// import AllImage from './components/AllImage';
// import './App.css';
// const ChangableComponent =  () => <p>Hello</p>;
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [pathname]);

    return null;
};

const Admin = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col">
                <header className="bg-gray-800 text-white p-4 shadow-md">
                    <h1 className="text-2xl font-bold">Admin Panel</h1>
                </header>

                <div className="flex gap-4">
                    <nav className="w-64 bg-gray-900 text-gray-200 p-4 flex flex-col min-h-[92vh]">
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                                <AiFillHome />
                                <Link to="/admin" className="flex-1">Home</Link>
                            </li>
                            <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                                <AiOutlinePlus />
                                <Link to="/admin/add-image" className="flex-1">Add Carousel Image</Link>
                            </li>
                            <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                                <AiOutlineDelete />
                                <Link to="/admin/remove-image" className="flex-1">Remove Carousel Image</Link>
                            </li>
                            <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                                <FaImage />
                                <Link to="/admin/all-image" className="flex-1">All Carousel Images</Link>
                            </li>
                            <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                                <AiOutlinePlus />
                                <Link to="/admin/create-blog" className="flex-1">Create Blog</Link>
                            </li>
                            <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                                <FaImage />
                                <Link to="/admin/all-blog" className="flex-1">All Blogs</Link>
                            </li>
                            <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                                <AiOutlineEdit />
                                <Link to="/admin/edit-blog" className="flex-1">Edit Blog</Link>
                            </li>
                            <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                                <AiOutlineLogout />
                                <Link to="/" className="flex-1">Logout</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex-1 p-6">
                        <Outlet /> {/* Renders nested route components */}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Admin;