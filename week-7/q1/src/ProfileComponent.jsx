export default function ProfileComponent() {
  const bgImg =
    "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const dpImg =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8";
  return (
    <div className="grid grid-rows-9 h-full">
      <div className="row-span-3">
        <img src={bgImg} alt="Hello" />
      </div>
      <div className="flex justify-center row-span-6 bg-white">
        <img
          className="h-1/5 rounded-full absolute top-[70px]"
          src={dpImg}
          alt="Hello"
        />
        <div className="flex flex-col pt-[130px] ">
          <div className="flex justify-center">
            <p className="font-semibold">John Cena</p>
            <p className="pl-[3px]">32</p>
          </div>
          <p className="text-gray-400 text-center pb-[20px]">Delhi</p>
          <hr className="w-[336px] pb-[20px]" />
          <div className="flex justify-evenly">
                <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">90k</p>
                    <p>Followers</p>
                </div>
                <div>
                    <p className="text-xl font-bold">999k</p>
                    <p>Likes</p>
                </div>
                <div>
                    <p className="text-xl font-bold">9k</p>
                    <p>Photos</p>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
