import ButtonComponent from "./ButtonComponent";

function NumberComponent(){
    return (
        <div className="flex flex-col items-center">
            <input className="bg-[#121212] border-2 border-[#dbdbdb] text-center p-1 m-2 text-[#dbdbdb] min-w-52 rounded-lg" type="text" placeholder="Enter your Mobile Number" maxLength={10}/>
            <ButtonComponent buttonText={"Send OTP"} toNavigate={"login"}/>
        </div>
    )
}

export default NumberComponent;