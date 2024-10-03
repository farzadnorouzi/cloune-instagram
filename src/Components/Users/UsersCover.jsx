


function UsersCover(props) {
    return (
    <div className="mt-5">
    <div className="w-10 h-10 shadow ml-10 mt-6 rounded-full overflow-hidden">
    <img
  className="w-full h-full p-1 object-cover shadow-red-950 border-2 border-red-500 outline outline-8 outline-red-500 rounded-full"
  src={props.data.url}
  alt={props.data.username}
/>
    </div>
    <p className="text-center mt-2 ml-7">{props.data.username}</p>
    </div>
    );
    }
    
    export default UsersCover;