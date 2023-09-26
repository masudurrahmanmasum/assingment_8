import { useEffect, useState } from "react";
import DonatedData from "../DonatedData/DonatedData";

const Donation = () => {
    const [getData, setGetData] = useState([])
    const [noData, setNoData] = useState("")
    const [showAll, setShowAll] = useState(false);
    useEffect(()=>{
        const previousCard = JSON.parse(localStorage.getItem('showCards'));

        if(previousCard){
            setGetData(previousCard);
        }
        else{
            setNoData("You have no donation history.")
        }
    }, [])
    console.log(showAll);
    return (
        <div className="mx-7 lg:mx-0">
            {
                noData? <div className="flex justify-center items-center h-[60vh]">
                    <h1 className="text-3xl font-semibold">{noData}</h1>
                </div> : <div>

                <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
                    {
                        showAll? getData.map(singleData => <DonatedData key={singleData.id} singleData={singleData}></DonatedData>) : 
                        getData.slice(0,4).map(singleData => <DonatedData key={singleData.id} singleData={singleData}></DonatedData>)
                    }
                </div>
                </div>
            }
            <div className="flex justify-center mt-14">
                <button onClick={() => setShowAll(!showAll)} className="btn bg-[#009444] text-white ">See All</button>
            </div>
        </div>
    );
};

export default Donation; 