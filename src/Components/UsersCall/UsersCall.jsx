import axios from "axios";
import { useEffect, useState } from "react";
import UsersCover from "../Users/UsersCover";
import { Link, useParams } from "react-router-dom";


function UsersCall() {
const [ApiData, setApiData] = useState([]);
const [error, setError] = useState(null);



useEffect(() => {

axios
.get("http://localhost:4000/posts")
.then((response) => {
setApiData(response.data);

})
.catch((err) => {
setError(err);

});
}, []);

return (

<div className="flex">

{ApiData.map((item)=>{
return(

<Link to={`/AllUsers/${item.id}`}>

<UsersCover key={item.id} data={item}/>

</Link>

)}
)}

</div>
);
}

export default UsersCall;