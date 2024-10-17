import axios from "axios";
import { useEffect, useState } from "react";
import Explor2 from "../Explor2/Explor2";
import Footer from "../../Components/footer/Footer";

function Explor() {

  const [Explor,setExplor] = useState([]);

    useEffect(()=>{
        axios
        .get("http://localhost:4000/data")
        .then((response)=>{
            setExplor(response.data);

        })
    })
    return(
        <div>
            <div className="text-center">

                <input className="bg-gray-100 w-3/4 mt-5 text-center rounded" placeholder="search..." type="text" />
                
                 </div>

                 <div className="flex flex-wrap justify-around">
                    {Explor.map((item)=>{
                        return(
                          
                          <>   
                       <Explor2 key={item.id} send={item} />
                       

                  
                   </>  
                        
                        
                    )}
                    )}

                 </div>
                <Footer/>

        </div>
    )
    
}

export default Explor