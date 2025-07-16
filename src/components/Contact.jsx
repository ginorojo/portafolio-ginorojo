export default function ContactForm() {
  return (
    <div className="w-full max-w-3xl  mb-20 bg-[#252549] p-8 rounded-2xl shadow-lg text-white" id="contact">
      <form
        action="https://formsubmit.co/ginorojoj@gmail.com"

        method="POST"
        className="flex flex-col space-y-4"
      >
        <input
          type="text"
          name="Full Name"
          placeholder="Full Name"
          required
          className="p-3 rounded-lg bg-[#3f3a75] border border-gray-500 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-[#2B556C]"
        />
        <input
          type="email"
          name="Email"
          placeholder="Email Address"
          required
          className="p-3 rounded-lg bg-[#3f3a75] border border-gray-500 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-[#2B556C]"
        />
        <textarea
          name="Message"
          placeholder="Your Message"
          rows="5"
          required
          className="p-3 rounded-lg bg-[#3f3a75] border border-gray-500 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-[#2B556C]"
        ></textarea>

        <button
          type="submit"
          className="cursor-pointer bg-gradient-to-r from-[#18CCFC] via-[#6344F5] to-[#AE48FF] hover:bg-gradient-to-l transition-colors py-3 px-6 rounded-lg text-white font-medium"
        >
          Send Message
        </button>

        {/* Opcionales */}
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://yourdomain.com/thank-you"
        />
      </form>
       <h3 className="text-xl my-5 mb-5 font-semibold  flex items-center justify-center">Contact Details</h3>
      <div className=" text-center text-sm text-gray-300 flex flex-col items-center justify-center">
        
        <div className="flex items-center justify-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#fff"
          >
            <path
              d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 
            33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"
            />
          </svg>
          <p>ginorojoj@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
