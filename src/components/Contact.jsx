import { useState } from "react";
import contactImage from "../utils/images/contactImage.jpg";
import { HTTP_BIN_URL } from "../utils/constants";

const Contact = () => {
  const [displayResponse, setDisplayResponse] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData,[name] : value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(formData.name || formData.email){
      const fetchRawData = await fetch(HTTP_BIN_URL,{
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      const fetchData = await fetchRawData.json();
      console.log(fetchData.data)
      if(fetchData.data) setDisplayResponse(true)
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-container-image">
        <img
          src={contactImage}
          alt="contact-image"
          width="2000"
          height="2000"
        />
      </div>
      <div className="form-container" onSubmit={handleSubmit}>
        <h3>Contact us</h3>
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
          <br />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
          <br />
          <label htmlFor="message">Message</label>
          <input type="text" name="message" id="message" value={formData.message} onChange={handleChange}/>
          <br />
          <button type="submit">Submit</button>
        </form>

        {displayResponse && (
          <div className="contact-hidden-msg">
            <h3 className="x-small-text">Thank you contacting us, We will contact you ASAP</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
