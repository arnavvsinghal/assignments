import { useEffect, useState } from "react";
import axios from "axios";
import GitHubComponent from "./GitHubComponent";

function App() {
  const [userData, setUserData] = useState({});
  useEffect(()=>{
    axios.get("https://api.github.com/users/arnavvsinghal")
    .then(res => setUserData(res.data))
    .catch(error => console.error("Error fetching GitHub data:", error));
  },[]);
  return (
    <GitHubComponent name={userData.name} login={userData.login} avatar_url={userData.avatar_url} bio={userData.bio} location={userData.location}/>
  );
}

export default App;
