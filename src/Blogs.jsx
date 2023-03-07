import { Link, Outlet } from 'react-router-dom';
import ReadBlog from './ReadBlog';
import './blogs.css';

const Blogs = (props) => {
    const totalBlogs = props.currentBlogs
    
    const blogData = totalBlogs.map((blog) => {
        return (
            <div className="blog-data" key={blog.title}>
                <Link to={blog.title} element={<ReadBlog blogTitle={blog.title} />}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                </Link>

            </div>
        )
    })

    return (
        <div className="blog-container">
            {totalBlogs.length === 0 ? 
            <div className='blog-container'>
                <h2>No Blogs</h2>
            </div> : 
            <div className='blog-container'>
                <h2>Total Blogs: {totalBlogs.length}</h2>
                {blogData}
            </div>}
            
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Blogs
