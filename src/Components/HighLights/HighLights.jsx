import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import HighLightcostom from "../Highlightcostom/HighLightscostom";

function HighLights() {
    const [highLights, setHighLights] = useState([]);
    const params = useParams();

    useEffect(() => {
       

        axios
            .get(`http://localhost:4000/estory`)
            .then((result) => {
                setHighLights(Array.isArray(result.data) ? result.data : [result.data]); 
            })
            .catch((error) => {
                console.error("Error fetching data:", error.response ? error.response.data : error.message);
            });
    }, []); 

    return (
        <div className="flex">
            {highLights.map((highlight) => (

                <HighLightcostom  data={highlight} />
            ))}
        </div>
    )
}

export default HighLights;