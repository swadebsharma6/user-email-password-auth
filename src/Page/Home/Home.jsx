import { useLoaderData } from "react-router-dom";
import Phone from "../../components/Phone/Phone";

const Home = () => {
    const phones = useLoaderData();
 
    return (
        <div>
          <div className="grid md:grid-cols-3 gap-4">
          {phones.map(phone => <Phone
            key={phone.id}
            phone={phone}
            ></Phone>)}
          </div>
        </div>
    );
};

export default Home;