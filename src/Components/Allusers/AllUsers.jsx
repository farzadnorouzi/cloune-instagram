import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AllUsers() {
    const [users, setUsers] = useState([]);
    const [users2, setUsers2] = useState([]);
    const params = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:4000/data/${params.id}`)
            .then((response) => {
                setUsers(response.data);
            });

        axios
            .get(`http://localhost:4000/posts/${params.id}`)
            .then((result) => {
                setUsers2(result.data);
            });
    }, []);

    return (
        <>
            <div className="flex flex-col">
                <div className="absolute right-0 w-16 h-16 shadow m-20 rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover" src={users2.url} />
                </div>

                <div className="mt-48 mr-10 text-end ">
                        <p className="text-2xl">{users.bio}</p>
                    </div>

                    <div className="flex items-center justify-center space-x-2 mt-5">

                       <button className="bg-blue-500 w-1/2 rounded">Direct</button>
                       <button className="bg-blue-500 w-1/2 rounded">Follow</button>
                      </div>

                   <div className="w-1/4 h-48 flex space-between mt-48">
                    <img className="mt-4 ml-10" src={users.post} />
                    </div>

                </div>
            
        </>
    );
}

export default AllUsers;