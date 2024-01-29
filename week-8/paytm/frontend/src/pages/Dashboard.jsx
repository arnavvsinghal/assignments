import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import Users from "../components/Users";

function Dashboard() {
    return ( 
        <div className="h-screen flex flex-col justify-between p-2">
            <Appbar/>
            <Balance/>
            <Users/>
        </div>
     );
}

export default Dashboard;