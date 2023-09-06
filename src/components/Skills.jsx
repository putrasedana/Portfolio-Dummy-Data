import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Tailwind from "../assets/tailwind.png";
import Bootstrap from "../assets/bootstrap.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-[800px] bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">Skills</p>
          <p className="py-6">These are the technologies I've learned</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#000] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML" />
            <p className="my-6">HTML</p>
          </div>
          <div className="shadow-md shadow-[#000] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS" />
            <p className="my-6">CSS</p>
          </div>
          <div className="shadow-md shadow-[#000] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript" />
            <p className="my-6">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#000] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind" />
            <p className="my-6">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#000] hover:scale-110 duration-500">
            <img className="w-28 mx-auto mb-[-17px] mt-[-13px]" src={Bootstrap} alt="Bootstrap" />
            <p className="my-6">Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#000] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React" />
            <p className="my-6">React JS</p>
          </div>
          <div className="shadow-md shadow-[#000] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="GitHub" />
            <p className="my-6">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
