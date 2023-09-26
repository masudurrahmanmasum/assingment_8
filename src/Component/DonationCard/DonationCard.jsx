import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const DonationCard = ({singleData}) => {
    const {id,image, title, category, text_color, bg_color, btn_bg} = singleData;
    const cardBg = {
        background : `${bg_color}`,
        color : `${text_color}`
    }
    const btnBg = {
        background: `${btn_bg}`
    }
    return (
        <Link to={`CardDetails/${id}`}>
            <div className='rounded-md cursor-pointer' style={cardBg}>
                <img className='rounded-md w-full' src={image} alt="card_img"/>
                <div className="interCard ml-5">
                    <button className='text-sm px-3 py-1 my-3 rounded-lg' style={btnBg}>{category}</button>
                    <h2 className='text-lg font-semibold mb-3'>{title}</h2>
                </div>
            </div>
        </Link>

    );
};



DonationCard.propTypes = {
    singleData: PropTypes.object.isRequired
  };
DonationCard.propTypes = {
    handleDetails: PropTypes.func
  };

export default DonationCard;