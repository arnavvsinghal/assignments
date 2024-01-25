function GitHubComponent({name,login,avatar_url,bio,location}) {
    return ( 
        <div className="flex flex-col w-[412px] h-[610px] bg-[#0D1116] rounded-[10px] p-8">
      <div className="w-[348px] h-[348px]">
        <img
          className="w-full h-full rounded-full"
          src={avatar_url}
          alt="img"
        />
      </div>
      <div className="grow flex flex-col justify-evenly">
        <div className="">
          <p className="text-[#E6EDF3] font-semibold text-2xl font-sans">
          {name}
          </p>
          <p className="text-[#848D97]	text-xl/9 font-sans">{login}</p>
        </div>
        <div>
          <p className="text-[#E6EDF3] text-base font-sans pb-4">
            {bio}
          </p>
          <div className="flex items-center">
            <svg
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"
                fill="#545454"
              ></path>
            </svg>
            <p className="text-[#E6EDF3] text-sm font-sans ps-2">{location}</p>
          </div>
        </div>
      </div>
    </div>
     );
}

export default GitHubComponent;