import Direct from "../Direct/Direct"
import Like from "../Like/Like"
import Logo from "../Logo/Logo"

function Navbar() {
    return (
        <div className="flex justify-between items-center p-4 w-full h-16">
            <div className="flex items-center space-x-4">
                <Direct />
                <Like />
            </div>
            <div className="hidden md:block"> 
                              <Logo />
            </div>
            <div className="block md:hidden"> 
                <Logo /> 
            </div>
        </div>
    )
}

export default Navbar;