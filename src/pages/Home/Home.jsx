import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Phones from "../../components/Phones/Phones";



const Home = () => {
    const phones = useLoaderData();
    const handleSearch = ()=>{
        console.log('ok');
    }

    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <Phones handleSearch={handleSearch} phones={phones}></Phones>

        </div>
    );
};

export default Home;