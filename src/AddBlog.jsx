import { useState } from 'react';
import './addblog.css';

const AddBlog = (props) => {

    const [sampleBlog, setSampleBlog] = useState ({
        title: '',
        author: '',
        content: ''
    })

    const submitForm = (e) => {
        e.preventDefault()
        props.getBlogData(sampleBlog)
        setSampleBlog({ ...sampleBlog, title: '', author: '', content: '' })
    }

    return (
        <div className="add-blog-form">
            <form onSubmit={submitForm}>
                <input 
                type="text"
                name="blog-title" 
                id="blog-title"
                placeholder='Title'
                value={sampleBlog.title}
                onChange={(e) => setSampleBlog({ ...sampleBlog, title: e.target.value })}
                />
                <input 
                type="text"
                name="blog-author" 
                id="blog-author"
                placeholder='Author'
                value={sampleBlog.author}
                onChange={(e) => setSampleBlog({...sampleBlog, author: e.target.value})}
                />
                <textarea 
                type="text"
                name="blog-content" 
                id="blog-content"
                placeholder='Content'
                value={sampleBlog.content}
                onChange={(e) => setSampleBlog({...sampleBlog, content: e.target.value})}
                />
                <button>Submit</button>
            </form>
        </div>
    )

}

export default AddBlog
