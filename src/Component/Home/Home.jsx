
import Data from "../FetchingData/Data";
import Hero from "./Hero_Section/Hero";

const Home = () => {

    return (
        <div className="nav_section">
            <Hero></Hero>
            <Data></Data>
        </div>
    );
};

export default Home;