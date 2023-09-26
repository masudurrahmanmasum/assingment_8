import { useLoaderData } from "react-router-dom";
import DonationCard from "../DonationCard/DonationCard";


const Data = () => {

    const cardData = useLoaderData();

    return (
        <div className="donation_card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-20 items-center px-3 lg:px-0">
            {
                cardData.map(singleData => <DonationCard key={singleData.id} singleData={singleData}></DonationCard>)
            }
        </div>
    );
};

export default Data;