import Navbar from "../Components/Navbar/Navbar"
import RandomPosts from "../Components/RandomPosts/RandomPosts"
import UsersCall from "../Components/UsersCall/UsersCall"


function Home() {
    return(
       
        <>
        <Navbar />
        <UsersCall />
        <RandomPosts />
        
        </>
      
    )
}

export default Home