import { useState } from 'react'
import { 
  createBrowserRouter,
  createRoutesFromElements, 
  Routes, 
  Route,
  RouterProvider,
  Outlet
} from 'react-router-dom';

//Layout
import ReadBlog from './ReadBlog'

//Page
import Navbar from './Navbar';
import Blogs from './Blogs';
import AddBlog from './AddBlog';
import Home from './Home'
import './App.css'

function App() {

  const [allBlogs, setAllBlogs] = useState([])

  const handleSubmit = (data) => {
    setAllBlogs([...allBlogs, data])
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs currentBlogs={allBlogs} />}>
            <Route path=':author' element={<ReadBlog />} />
          </Route>
          <Route path='add-blog' element={<AddBlog getBlogData={handleSubmit} />} />
        </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
