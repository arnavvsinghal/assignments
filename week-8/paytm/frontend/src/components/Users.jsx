import InputBox from "./InputBox";
import User from "./User";

function Users() {
  const renderComponents = () => {
    const components = [];
    for (let i = 0; i < 100; i++) {
      components.push(<User />);
    }
    return components;
  };

  return (
    <div className="">
      <p className="px-2.5 text-lg font-bold">Users</p>
      <InputBox label={""} placeholder={"Search Users"} />
      <div class="h-[60vh] overflow-y-scroll mt-5 pt-2.5">
        <div>{renderComponents()}</div>
      </div>
    </div>
  );
}

export default Users;
