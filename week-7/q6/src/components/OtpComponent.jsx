import ButtonComponent from "./ButtonComponent";

function OtpComponent() {
  function otpInput(event) {
    console.log(event.target.value);
    if (event.target.nextSibling && event.target.value) event.target.nextSibling.focus();
    else if(!event.target.nextSibling && event.target.value) event.target.blur();
  }
  return (
    <div className="flex flex-col items-center bg-[#121212]">
      <div className="flex justify-evenly">
        <input
          id={1}
          className="border-2 w-10 h-10 p-3 m-2 rounded-md bg-[#121212] border-[#dbdbdb] text-[#dbdbdb]"
          type="text"
          maxLength={1}
          autoFocus
          onChange={otpInput}
        />
        <input
          id={2}
          className="border-2 w-10 h-10 p-3 m-2 rounded-md bg-[#121212] border-[#dbdbdb] text-[#dbdbdb]"
          type="text"
          maxLength={1}
          onChange={otpInput}
        />
        <input
          id={3}
          className="border-2 w-10 h-10 p-3 m-2 rounded-md bg-[#121212] border-[#dbdbdb] text-[#dbdbdb]"
          type="text"
          maxLength={1}
          onChange={otpInput}
        />
        <input
          id={4}
          className="border-2 w-10 h-10 p-3 m-2 rounded-md bg-[#121212] border-[#dbdbdb] text-[#dbdbdb]"
          type="text"
          maxLength={1}
          onChange={otpInput}
        />
      </div>
      <ButtonComponent buttonText={"Login"} toNavigate={""}/>
    </div>
  );
}

export default OtpComponent;
