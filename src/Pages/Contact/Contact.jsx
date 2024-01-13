import contactImage from "../../assets/contact.jpg";
const Contact = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://raw.githubusercontent.com/ShariarNiaj05/Graydot-Technologies-Task-Client/main/src/assets/contact.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Contact With Us</h1>
          <p className="mb-5">
            Have a question, suggestion, or just want to say hello? We'd love to
            hear from you. Feel free to reach out using the contact information
            below or by filling out the form.
          </p>
          <p>Email: shariarn85@gmail.com </p>
          <p>Phone: +8801850893033</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

Contact.propTypes = {};
