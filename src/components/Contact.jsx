import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-[1000px] text-gray-300 bg-[#0a192f] flex justify-center items-center p-4">
      <form method="POST" action="https://getform.io/f/e4c90e90-cfac-4e09-a9c6-3ca35349580b" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4  border-pink-600">Contact</p>
          <p className="py-6">Submit the forms below or send me an email - putrasedana03@gmail.com</p>
        </div>
        <label htmlFor="name" className="font-bold ">
          Name
        </label>
        <input className="my-2 p-2 rounded-sm text-black bg-[#fff]" placeholder="Enter your name" type="text" name="name" />
        <label htmlFor="email" className="font-bold mt-4">
          Email
        </label>
        <input className="my-2 p-2 rounded-sm text-black bg-[#fff]" placeholder="Enter your email" type="email" name="email" />
        <label htmlFor="message" className="font-bold mt-4">
          Message
        </label>
        <textarea className="my-2 p-2 rounded-sm text-black bg-[#fff]" placeholder="Enter your message here..." name="message" cols="30" rows="10"></textarea>
        <button className="border-2 p-2 my-4 mr-[400px] rounded-sm hover:border-black duration-300 hover:text-black hover:bg-green-500 font-bold">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
