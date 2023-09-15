const  BlogList = ({blogs, title, handDelete}) => {
    //const blogs = probs.blogs;

    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                     <p>Written by { blog.author }</p>
                     <button onClick={() => handDelete(blog.id)}>Delete blog</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList ;