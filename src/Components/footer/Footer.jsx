import { GrHomeRounded } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { MdOutlinePersonalVideo } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

function Footer() {
    return(
        <div className="flex text-4xl mt-12 justify-center bg-gray-500 sticky static bottom-0 overflow-hidden  rounded">
            <CgProfile className="mr-16"/>
            <MdOutlinePersonalVideo className="mr-16"/>
             <CiSquarePlus className="mr-16" />
             < IoSearch className="mr-16" />
             <GrHomeRounded className="mr-16"/>
            
        </div>
    ) 
}

export default Footer