import Direct from "../Direct/Direct"
import Like from "../Like/Like"
import Logo from "../Logo/Logo"


function Navbar() {
    return(
        <div className="flex justify-between p-7 w-full h-16 items-center">
            <div className="flex ">
            <Direct />
            <Like />
            </div>
             
              <div className="">
            <Logo />
              </div>
        </div>
    )
    
}

export default Navbar