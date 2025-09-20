import React from "react";

const Contacts = () => {
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <section id="contact" className="h-screen w-full flex bg-gray-100">
      <div className="w-[60%] bg-[url('contact_img.png')] bg-no-repeat bg-cover  bg-center bg-gray-200"></div>
      <div className="w-[40%] p-20 ring flex ">
        <div>
          <form onSubmit={submitForm} className="space-y-5">
            <h1 className="text-4xl">Contact Form</h1>
            <div className="form ">
              <label>Full name</label>
              <input type="text" placeholder="juancarlo" />
            </div>
            <div className="form">
              <label>Email</label>
              <input type="text" placeholder="hello@gmail.com" />
            </div>
            <div className="form">
              <label>Message</label>
              <textarea
                placeholder="Whats your message"
                id="comment"
              ></textarea>
            </div>
            <button className="text-white bg-primary hover:bg-blue-950 transition duration-900 p-1 w-[400px]  font-bold rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
