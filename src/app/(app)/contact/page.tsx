import React from "react";

function page() {
  return (
    <div className="flex justify-center items-center h-[90vh] mt-[10vh] bg-bodyback">
      <div
        id="drawer-contact"
        className="p-4   bg-secbodyback w-full max-w-lg md:max-w-xl lg:max-w-2xl rounded-lg shadow-lg"
      >
        <h5
          id="drawer-contact-label"
          className="inline-flex items-center mb-6 text-lg md:text-xl font-semibold  uppercase text-h1text"
        >
          <svg
            className="w-5 h-5 mr-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
          </svg>
          Contact us
        </h5>
        <form className="mb-6">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-h3text"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="name@company.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-h3text"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-h3text"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Your message..."
              required
            />
          </div>
          <button
            type="submit"
            className=" text-btntext bg-btnback hover:bg-btnhover hover:text-btntexthover w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none "
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;
