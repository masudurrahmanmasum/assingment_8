import PropTypes from 'prop-types';
const DonatedData = ({singleData}) => {
    const { image,category, title, price, bg_color, text_color, btn_bg} = singleData;
    const cardBg = {
        background : `${bg_color}`,
        color : `${text_color}`
    }
    const btn_clr = {
        background: `${text_color}`
    }
    const btnBg = {
        background: `${btn_bg}`
    }
    return (
        <div style={cardBg} className="flex flex-col lg:flex-row rounded-lg lg:gap-10 gap-1 py-5 lg:py-0 items-center lg:text-left text-center mt-6">
            <img src={`${image}`} />
            <div className="py-3">
                <button className='text-sm px-3 py-1 my-3 rounded-lg' style={btnBg}>{category}</button>
                <h2 className="text-xl font-semibold my-2 text-black">{title}</h2>
                <p className="my-2"> ${price}.00</p>
                <button style={btn_clr} className="text-white px-5 py-2 rounded-lg">View Details</button>
            </div>
        </div>
    );
};

DonatedData.propTypes = {
    singleData: PropTypes.object.isRequired
  };

export default DonatedData;