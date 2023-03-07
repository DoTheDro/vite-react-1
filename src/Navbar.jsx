import { NavLink, Outlet } from 'react-router-dom';
import Blogs from './Blogs';
import AddBlog from './AddBlog';


import './navbar.css';

const Navbar = () => {

    return (
        <div>
            <header>
                <div className="navbar">
                    <div className="site-logo">
                        <NavLink path="/">Logo</NavLink>
                    </div>
                    <div className="site-links">
                        <ul>    
                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='blogs'>Blogs</NavLink>
                            </li>
                            <li>
                                <NavLink to='add-blog'>Add Blog</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            <main>
                <Outlet />
            </main>

        </div>
        
    )

}

export default Navbar
