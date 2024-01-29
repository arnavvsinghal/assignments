import Button from "./Button";

function Appbar() {
  return (
    <div className="flex justify-between items-center">
      <div className="bg-black rounded-full w-9 h-9 flex justify-center items-center m-2.5">
        <p className="text-white text-lg">A</p>
      </div>
      <div className="font-extrabold text-3xl m-2.5">PayTM</div>
      <Button label={"Log Out"} />
    </div>
  );
}

export default Appbar;
