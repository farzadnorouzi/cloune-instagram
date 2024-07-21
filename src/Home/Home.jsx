import AllUsers from "../Components/Allusers/AllUsers"
import Navbar from "../Components/Navbar/Navbar"
import UsersCall from "../Components/UsersCall/UsersCall"


function Home() {
    return(
       
        <>
        <Navbar />
        <UsersCall />
        <AllUsers />
        
        </>
      
    )
}

export default Home