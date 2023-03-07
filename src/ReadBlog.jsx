import { useParams } from "react-router-dom"

const ReadBlog = () => {
    const { author } = useParams()

    console.log(useParams())

    return (
        <div className="blog-details">
            <h2>{ author }</h2>
        </div>
    )

}

export default ReadBlog
