import { FaRegCircleUser } from "react-icons/fa6";
import HighLights from "../../Components/HighLights/HighLights";
import { RiListSettingsFill } from "react-icons/ri";

function Profile() {
    return(
        <>
    <div className="flex items-center ">
    <RiListSettingsFill className="m-7 text-3xl" />
    <h1 className="ml-80 text-2xl">your username-2006</h1>
</div>
        <div className="m-52 flex items-center">
            <div className="flex flex-col items-end">
                <FaRegCircleUser className="text-6xl" />
            </div>
            <div className="flex text-center ml-6">
                <h1 className="pl-12">1 <br /> post</h1>
                <h1 className="pl-6">1000 <br /> followers</h1>
                <h1 className="pl-6">500 <br /> following</h1>
            </div>
        </div>

        
        <div className="flex p-9">
            <div className="bg-blue-700 w-1/2 text-center  rounded"><button>setting</button></div>
            <div className="bg-blue-700 w-1/2 text-center rounded"><button >share</button></div>
            </div>

            <HighLights />
    </>
    )
}

export default Profile