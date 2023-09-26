import { useEffect, useState  } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert";

const CardDetails = () => {
    const [details, setDetails] = useState({});
    const {image, price, title, body} = details;
    const {id} = useParams();
    const cards = useLoaderData();



    useEffect(()=>{
        const findCard =  cards?.find(card => card.id == id)
        setDetails(findCard)
    }, [id, cards])


    const handleDonate = () => {
        const addedCard = []
        const previousCard = JSON.parse(localStorage.getItem('showCards'))
        if(!previousCard){
            addedCard.push(details);
            localStorage.setItem("showCards", JSON.stringify(addedCard));
            Swal("Great", "You have donate successfully!", "success");
        }else{
            const isHere = previousCard.find(prevCard => prevCard.id == id);
            if(!isHere){
                addedCard.push(...previousCard, details);
                localStorage.setItem("showCards", JSON.stringify(addedCard));
                Swal("Great", "You have donate successfully!", "success");
            }
            else{
                Swal("Warning", "You have already donate..");
            }

        }

    } 

    return (
        <div className="mt-10">
            <div className="img_div relative">
                <img className="w-full h-96 rounded-md" src={`${image}`} alt="details image" />
                    <p onClick={handleDonate} className="bg-[#0b0b0b80] absolute w-full bottom-0 h-20 flex items-center"><button className="bg-[#FF444A] px-5 py-2 rounded-lg m-10 text-white">Donate: ${price}</button></p>
            </div>

            <h2 className="text-3xl font-semibold my-6">{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default CardDetails;