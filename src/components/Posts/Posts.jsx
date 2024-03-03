import { useEffect, useState } from "react";
import PostCard from "./PostCard";


const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div className="max-w-[1400px] mx-auto px-5">
            <h1 className="text-5xl font-semibold my-10">All Posts: {posts.length}</h1>
            <div>
                {
                    posts?.map((post, index) => <PostCard key={index} post={post}></PostCard>)
                }
            </div>
        </div>
    );
};

export default Posts;