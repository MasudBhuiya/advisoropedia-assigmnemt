import { useContext, useEffect, useState } from "react";
import PostCard from "./PostCard";
import { AuthContext } from "../Provider/AuthProvider";


const Posts = () => {
    const [posts, setPosts] = useState([]);
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        fetch(`https://advisoropedia-assignment-server.vercel.app/posts?email=${user?.email}`,{
            method: "GET",
            headers: {
                authorization :
                    `Bearer ${localStorage.getItem('post-acces-token')}`
                }
        })
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div className="max-w-[1400px] mx-auto px-5">
            <h1 className="text-5xl font-semibold my-10">All Posts: {posts.length}</h1>
            <div>
                {
                   Posts && posts?.map((post, index) => <PostCard key={index} post={post}></PostCard>)
                }
            </div>
        </div>
    );
};

export default Posts;