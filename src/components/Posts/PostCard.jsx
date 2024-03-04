import { AiFillLike } from "react-icons/ai";
import { BiSolidHeartCircle } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa6";
import { IoMdShareAlt } from "react-icons/io";
import { BiLike } from "react-icons/bi";
const PostCard = ({ post }) => {
    // console.log(post);
    return (
        <div className="mb-16">
            <div className="flex items-center gap-4">
                <img className="h-14 w-14 rounded-full" src={post.profilePic} alt="" />
                <div>
                    <h1 className="text-[22px] font-semibold">{post.author}</h1>
                    <p>{post?.date}</p>
                </div>
            </div>
            <p className="text-lg font-semibold mt-5 mb-1">{post?.title}</p>
            <p>{post?.content} Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptates totam ducimus dignissimos alias nemo illum sunt consectetur maxime ut facere cumque molestiae, nostrum reprehenderit pariatur nam eum natus, unde, illo ad doloribus molestias error eaque? Pariatur quasi veniam unde error ipsum nesciunt eveniet earum provident quos consequatur minima natus corporis maiores aut saepe reiciendis, distinctio cupiditate perspiciatis voluptate quaerat nobis expedita nostrum. Possimus, illo soluta amet a tempora tenetur natus! Deleniti minus nobis soluta recusandae a illum iste, quam molestias ad aspernatur temporibus tempore laudantium corporis fugiat dolorum nisi?</p>
            
            <div className="flex justify-between items-center mt-5">
                <div className="flex items-center cursor-pointer">
                    <BiSolidHeartCircle className="text-2xl z-10  -me-[8px] text-red-600" />
                    <AiFillLike className="text-[22px] border rounded-full border-blue-500 text-blue-500" />
                    <p className="text-lg">{post?.likes}k</p>
                </div>
                <div className="flex gap-3 md:gap-12">
                <p  className="text-xl font-semibold flex items-center gap-2 cursor-pointer">{post?.comments} Comments</p>
                <p className="text-xl font-semibold flex items-center gap-2 cursor-pointer">{post?.share} Shares</p>
                </div>
                
            </div>
            <hr className="my-2 border" />
            <div className="flex gap-6 md:gap-12">
                <p className="text-xl font-medium flex items-center cursor-pointer gap-3"><BiLike className="text-2xl"/> Like</p>
            <p title={post?.comments} className="text-xl font-semibold flex items-center gap-2 cursor-pointer"><FaRegCommentDots className="text-2xl" /> Comment</p>
                <p className="text-xl font-semibold flex items-center gap-2 cursor-pointer"><IoMdShareAlt className="text-2xl" /> Share</p>
            </div>
        </div>
    );
};

export default PostCard;