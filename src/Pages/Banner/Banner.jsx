import bannerImage1 from "../../../src/assets/banner-image-1.jpg";
const Banner = () => {
  return (
    <div className=" flex flex-col md:flex-row max-w-full justify-center items-center mx-auto p-2">
      <div className=" flex-1 text-center">
        <p className=" font-bold text-xl text-orange-400 mb-5">
          Learn From Today
        </p>
        <h2 className=" md:w-2/3 font-bold text-3xl mb-10">
          Welcome to Gray Dot! Where every click is a journey.
        </h2>
        <div>
          <button className=" btn bg-[#33547D] text-white hover:bg-[#77B7DD] hover:text-black mr-2 mb-2">
            Explore
          </button>
          <button className=" btn bg-[#33547D] text-white hover:bg-[#77B7DD] hover:text-black mr-2 mb-2">
            Connect
          </button>
          <button className=" btn bg-[#33547D] text-white hover:bg-[#77B7DD] hover:text-black mb-2">
            Discover
          </button>
        </div>
      </div>
      <div className=" flex-1">
        <img
          className=" rounded-full hover:rounded-none"
          src={bannerImage1}
          alt="user-image"
        />
      </div>
    </div>
  );
};

export default Banner;
