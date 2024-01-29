import Button from "./Button";

function User() {
  return (
    <div className="flex justify-between items-center px-5 py-2.5">
      <div className="flex items-center">
        <div className="bg-black rounded-full w-9 h-9 flex justify-center items-center">
          <p className="text-white text-xl">A</p>
        </div>
        <div className="text-xl pl-5">Arnav Singhal</div>
      </div>
      <Button label={"Send Money"} />
    </div>
  );
}

export default User;
