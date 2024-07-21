import { Routes,Route } from "react-router-dom"
import Home from "./Home/Home"
import AllUsers from "./Components/Allusers/AllUsers"




function App() {
  return(

 

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/AllUsers/:id" element={<AllUsers/>} />
    
    

    </Routes>

    
  )
  
}

export default App