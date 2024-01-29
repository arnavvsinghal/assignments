import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";

function Signin() {
  return (
    <div>
      <div className="bg-[#7F7F7F] h-screen flex justify-center items-center">
        <div className="bg-white rounded-lg flex flex-col items-center px-6 py-9 border">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox label={"Email"} placeholder={"johndoe@gmail.com"} />
          <InputBox label={"Password"} placeholder={"********"} />
          <Button label={"Sign In"} />
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up!"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}

export default Signin;
