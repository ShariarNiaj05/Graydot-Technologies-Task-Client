import aboutImage from "../../assets/about.jpg";
const About = () => {
  return (
    <div className=" flex flex-col md:flex-row">
      <div className=" flex-1 p-2">
        <img className=" rounded-lg" src={aboutImage} alt="" />
      </div>
      <div className=" flex-1 p-2 text-center my-auto">
        <h2 className=" font-bold text-3xl mb-5">Our Journey</h2>
        <p className=" text-xl ">
          Explore the winding path that led us to
          <span className=" bg-[#33547D] text-white p-1">
            Graydot Technologies
          </span>
          . From late-night brainstorming sessions to overcoming challenges, our
          story is one of passion and perseverance.
        </p>
      </div>
    </div>
  );
};

export default About;

About.propTypes = {};
