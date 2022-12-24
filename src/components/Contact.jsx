import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen  text-white bg-gradient-to-b from-[#2cc0d2]  via-cyan-200 to-[#2cc0d2]  dark:from-gray-800 dark:via-gray-700 dark:to-gray-900"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full text-[#0b6972] dark:text-gray-500 ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-orange-700 text-[#0b6972] dark:border-gray-500 dark:text-orange-400 ">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none border-[#3a9f87]"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md  focus:outline-none border-[#3a9f87]"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none border-[#3a9f87]"
            ></textarea>

            <button className=" px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 text-white bg-gradient-to-r from-orange-700 to-orange-500 dark:from-cyan-700 dark:to-[#2cc0d2] ">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
