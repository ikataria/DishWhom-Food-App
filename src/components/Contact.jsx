const Contact = () => {
  return (
    <div className="contact-container">
      <div className="image-container"></div>
      <div className="form-container">
        <h3>Contact us</h3>
        <form action="https://httpbin.org/post" method="post" target="/">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
          <br />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <br />
          <label htmlFor="message">Message</label>
          <input type="text" name="message" id="message" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
