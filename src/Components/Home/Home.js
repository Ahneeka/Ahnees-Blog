import { useState } from "react";
import BlogList from "../BlogList/BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:'My new website', body:'lorem Ipsum...', author: 'Ahneeka', id: 1},
        {title:'Welcome party!', body:'lorem Ipsum...', author: 'Favour', id: 2},
        {title:'All about joy', body:'lorem Ipsum...', author: 'Joy', id: 3},
        {title:'Web dev top tips', body:'lorem Ipsum...', author: 'Raheem', id: 4},
        {title:'My life as an engineer', body:'lorem Ipsum...', author: 'Ahneeka', id: 5}
    ])

    const handDelete = (id) => { 
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }


    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handDelete={handDelete}/>
            {/* <BlogList blogs={blogs.filter((blog) =>blog.author==='Ahneeka')} title="Ahneek's blogs" /> */}
        </div>
     );
}
 
export default Home ;