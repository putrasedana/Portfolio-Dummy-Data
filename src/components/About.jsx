const About = () => {
  return (
    <div name="about" className="w-full h-[600px] bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe animi, temporibus molestias iusto doloribus doloremque enim ab officiis aut consequuntur dolore odio nulla unde inventore? Deleniti, aut inventore! Officiis,
              perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eius impedit excepturi laborum, quisquam ut. Inventore impedit sequi quam veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id
              distinctio vero iste, nam optio facere illo amet modi, dignissimos totam facilis, exercitationem repellat at. Provident quae repudiandae quia itaque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
