import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";


const Main = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
           <Header></Header>
           <Outlet></Outlet>
        </div>
    );
};

export default Main;