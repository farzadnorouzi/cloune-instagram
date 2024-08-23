import axios from "axios";
import { useEffect, useState } from "react";

function RandomPosts() {
    const [result, setResult] = useState([]); 

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
        <div className="w-full h-96 shadow  mt-6 pt-12  ">
            {result.map((post, index) => (
                <div key={index}>
                    {post.url ? ( 
                        <img className="pt-24 w-full h-full object-cover" src={post.url}  />
                    ) : (
                        <div>No image available</div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default RandomPosts;