import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:'My new website', body:'lorem Ipsum...', author: 'Ahneeka', id: 1},
        {title:'Welcome party!', body:'lorem Ipsum...', author: 'Favour', id: 2},
        {title:'All about joy', body:'lorem Ipsum...', author: 'Joy', id: 3},
        {title:'Web dev top tips', body:'lorem Ipsum...', author: 'Raheem', id: 4},
        {title:'My life as an engineer', body:'lorem Ipsum...', author: 'Adeola', id: 5}
    ])

    return ( 
        <div className="home">
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home ;