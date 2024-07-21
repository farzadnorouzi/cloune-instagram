import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AllUsers() {
    const [users, setUsers] = useState([]);
    const params = useParams();
    console.log(params.id);
   
  
    useEffect(() => {

        axios
            .get(`http://localhost:4000/data/${params.id}`)

            .then((response) => {
                setUsers(response.data);
            })
            
    }, []);

    return (
        <>
        <div>
             <img className="w-1/2 h-1/2 justfy-center" src={users.post} />
             <p>{users.bio}</p>
        </div>
      
        </>
    );
}

export default AllUsers;