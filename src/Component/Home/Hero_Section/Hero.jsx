import './hero.css'
const Hero = () => {
    return (
        <div className='z-0'>
            <div className="hero_section"></div>
            <div className="hero_div flex justify-center text-center top-1/2 w-full">
                <div className="hero_sub_div">
                    <h1 className='text-4xl font-semibold '>I Grow By Helping People In Need</h1>
                    <form className="max-w-sm px-4 m-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full py-3 pl-4 pr-16 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                            />
                            <button className='bg-[#FF444A] px-3 py-2 absolute top-0 bottom-0 right-0 w-24 h-12 my-auto text-white rounded-r-md' >Search</button>
                        </div>
                    </form>
                </div>
            </div>
        
        </div>
    );
};

export default Hero;