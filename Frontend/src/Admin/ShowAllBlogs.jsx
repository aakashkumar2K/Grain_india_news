import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard'
import { BlogCardShimmer } from '../components/BlogCardShimmer';
// import './BlogList.css'; // Assuming you'll style your list here

const ShowAllBlogs = () => {
 
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/blog');
                //console.log(response.data.data.data);
                const blogsArray = Array.isArray(response.data.data.data) ? response.data.data.data: [response.data.dat.data];
                setBlogs(blogsArray);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    

    return (
      <div>
          <h1 className='text-center text-2xl font-bold '>All Blogs</h1>
        <div className="blog-list grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))
        ) : (
          Array.from({ length: 20 }).map((_, i) => (
            <BlogCardShimmer key={i}/>
          ))
        )}
      </div>
      </div>

      
    );
};

export default ShowAllBlogs;