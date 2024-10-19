import { Routes,Route } from "react-router-dom"
import Home from "./Home/Home"
import AllUsers from "./Components/Allusers/AllUsers"
import DirectMassige from "./Components/DirectMassige/DirectMassige"
import DirectMe from "./DirectMe/DirectMe"
import Explor from "./Component2/Explor/Explor"
import Profile from "./Component2/Profile/Profile"





function App() {
  return(

 

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/AllUsers/:id" element={<AllUsers/>} />
    <Route path="/AllUsers/:id/DirectMassige" element={<DirectMassige />} />
    <Route path="/DirectMe" element={<DirectMe />} />
    <Route path="/Explor" element={<Explor />} />
    <Route path="/Profile" element={<Profile />} />
    
 

    
    

    </Routes>

    
  )
  
}

export default App