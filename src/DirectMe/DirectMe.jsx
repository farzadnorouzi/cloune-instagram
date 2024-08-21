import { FaVideo } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdBackspace } from "react-icons/io";
import { FaCommentDots } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { MdKeyboardVoice } from "react-icons/md";
import { FaCamera } from "react-icons/fa";

function DirectMe() {
    return(
        <>
        <div className="flex justify-between items-center p-16">
        <div className="flex items-center">
            <FaVideo className="mr-5" />
            <IoCall />
        </div>
        <div>
            <IoMdBackspace />
        </div>
    </div>

    <div><h1 className="text-center mt-12">hello here for text but i have not back developer for this empty</h1></div>

    <div className="flex mt-80 pl-12 bg-gray-300 items-center p-5 rounded">
    <FaCommentDots className="mr-5" />
    <GrGallery className="mr-5" />
    <MdKeyboardVoice className="mr-5" />

    <div className="text-center ml-28"><input type="text" className="w-96 text-center bg-gray-200 rounded" placeholder="search..." /></div>
    
    <div className="ml-auto">
        <FaCamera className="mr-20"/>
    </div>
</div>
       </>
    )
    
}

export default DirectMe