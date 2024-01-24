import { useNavigate } from "react-router-dom";

function ButtonComponent({buttonText, toNavigate}) {
    const navigate = useNavigate();
    function handleClick(){
        navigate(`/${toNavigate}`);
    }
    return (  
        <button onClick={handleClick} className="bg-[#121212] border-2 border-[#dbdbdb] text-[#dbdbdb] p-1 m-2 rounded-lg">{buttonText}</button>
    );
}

export default ButtonComponent;