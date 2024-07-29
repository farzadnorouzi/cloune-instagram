import { useNavigate } from "react-router-dom";

function Button() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("./DirectMassige");
    }

    return (
        <div className="bg-blue-500 w-1/2 rounded text-center">
            <button onClick={handleNavigate}>Direct</button>
        </div>
    );
}

export default Button;