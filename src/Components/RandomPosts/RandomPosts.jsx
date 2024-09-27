import axios from "axios";
import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TiHeartOutline, TiHeart } from "react-icons/ti"; // اضافه کردن TiHeart
import { FaRegComment } from "react-icons/fa";
import { VscFileSymlinkDirectory } from "react-icons/vsc";

function RandomPosts() {
    const [result, setResult] = useState([]); 
    const [likedPosts, setLikedPosts] = useState(new Set()); // استفاده از Set برای ذخیره پست‌های لایک شده

    const handleHeartClick = (postId) => {
        setLikedPosts((prev) => {
            const updatedLikes = new Set(prev);
            if (updatedLikes.has(postId)) {
                updatedLikes.delete(postId);
            } else {
                updatedLikes.add(postId);
            }
            return updatedLikes;
        });
    };

    useEffect(() => {
        axios
            .get("http://localhost:4000/posts")
            .then((response) => {
                setResult(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    if (result.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full h-96 shadow mt-6 pt-12">
            {result.map((post) => (
                <div key={post.id}> 
                    <div className="flex justify-between items-center mt-12 mx-14">
                        <BsThreeDotsVertical className="ml-0" />
                        <div className="flex items-center">
                            <h1 className="mr-6">{post.username}</h1>
                            <img className="rounded-full w-14 h-14" src={post.url}  />
                        </div>
                    </div>

                    {post.url ? (
                        <img className="pt-7 w-full h-full object-cover" src={post.url} alt="Post" />
                    ) : (
                        <div>No image available</div>
                    )}

                    <div className="flex justify-end items-center text-2xl mt-12 mr-12">
                        <VscFileSymlinkDirectory className="mr-6" />
                        <FaRegComment className="mr-6" />
                        <div onClick={() => handleHeartClick(post.id)} className="cursor-pointer">
                            {likedPosts.has(post.id) ? (
                                <TiHeart className="mr-6 text-red-500" />
                            ) : (
                                <TiHeartOutline className="mr-6" />
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RandomPosts;