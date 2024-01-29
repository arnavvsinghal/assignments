import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";

function Signup() {
  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg flex flex-col items-center px-8 py-12 border">
        <Heading label={"Sign Up"} />
        <SubHeading label={"Enter your information to create an account"} />
        <InputBox label={"First Name"} placeholder={"John"} />
        <InputBox label={"Last Name"} placeholder={"Doe"} />
        <InputBox label={"Email"} placeholder={"johndoe@gmail.com"} />
        <InputBox label={"Password"} placeholder={"********"} />
        <Button label={"Sign Up"} />
        <BottomWarning
          label={"Already have an account?"}
          buttonText={"Sign in!"}
          to={"/signin"}
        />
      </div>
    </div>
  );
}

export default Signup;
