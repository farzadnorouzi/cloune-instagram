import axios from "axios";
import { useEffect, useState } from "react";
import { PiCameraBold } from "react-icons/pi";


function DirectMassige() {
    const [DirectMassige, setDirectMassige] = useState();

    useEffect(() => {
        axios
            .get("http://localhost:4000/posts")
            .then((result) => {
                setDirectMassige(result.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
        
            <div>
    
        <div className="p-7 text-center"><input type="text" className="w-4/5 h-7 bg-gray-50 text-center rounded" placeholder="Search..." /></div>
                {DirectMassige ? (
                    DirectMassige.map((item) => (
                        <div key={item.id} className="flex mt-6 justify-between">
                            <img className="rounded-full w-16 h-16 object-cover mt-5 ml-7" src={item.url} alt={item.username} />
                            <p className="mt-7 mr-7 pl-12 text-xl">{item.username}</p>
                            <div className="flex">
                                <PiCameraBold className="size-9 mt-5 mr-7" />
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">Loading...</p>
                )}
            </div>
        </>
    ); 
}

export default DirectMassige;