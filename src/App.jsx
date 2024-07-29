import { Routes,Route } from "react-router-dom"
import Home from "./Home/Home"
import AllUsers from "./Components/Allusers/AllUsers"
import DirectMassige from "./Components/DirectMassige/DirectMassige"





function App() {
  return(

 

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/AllUsers/:id" element={<AllUsers/>} />
    <Route path="/AllUsers/:id/DirectMassige" element={<DirectMassige />} />
 

    
    

    </Routes>

    
  )
  
}

export default App