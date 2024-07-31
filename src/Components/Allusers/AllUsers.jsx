import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HighLights from "../HighLights/HighLights";
import Followers from "../../Followers/Followers";
import YourPosts from "../../YourPosts/YourPosts";
import Following from "../../Following/Following";
import Button from "./../Button/Button";
import Direct from "../Direct/Direct";
import Like from "../Like/Like";

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const params = useParams();

  const handleClick = () => {
    setCount(clicked ? count - 1 : count + 1);
    setClicked(!clicked);
  };

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
  }, [params.id]);

  return (
    <>

    <div className="flex m-7 ml-16">
      <Direct />
      <Like />
      </div>

      <div className="flex flex-col ">
    
        <div className="flex justify-center text-center pt-20 ">
          <Following />
          <Followers count={count} />
          <YourPosts /> 
        </div>

        <div className="absolute right-0 w-16 h-16 shadow m-20 rounded-full overflow-hidden">
          <img className="w-full h-full object-cover" src={users2.url} />
        </div>

        <div className="mt-48 mr-10 text-end ">
          <p className="text-2xl">{users.bio}</p>
        </div>

        <div className="flex items-center justify-center space-x-2 mt-5">
          <Button />
          <button onClick={handleClick} className="bg-blue-500 w-1/2 rounded">
            {clicked ? "Unfollow" : "Follow"}
          </button>
        </div>

        <HighLights />

        <div className="w-1/4 h-48 flex space-between mt-48">
          <img className="mt-4 ml-10" src={users.post} />
        </div>
      </div>
    </>
  );
}

export default AllUsers;