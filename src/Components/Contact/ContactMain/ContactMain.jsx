import React from "react";
import FooterNew from "../../Footer/FooterNew";
import Navbar from "../../Navbar/Navbar";
import ContactHome from "../Contact-home/Contact";
import ContactForm from "../Contact.form/ContactForm";
import Admission from "../ContactAdmission/Admission";
import Details from "../ContactDetails/Details";
function ContactMain() {
  return (
    <div className="contact-main">
      <Navbar />
      <ContactHome />
      <ContactForm />
      <Details />
      <Admission />
      <FooterNew />
    </div>
  );
}

export default ContactMain;
