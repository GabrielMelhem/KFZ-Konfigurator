import React from "react";
import { FaEnvelope, FaFax, FaHome, FaPhone } from "react-icons/fa";
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-lg-start text-muted mt-10">
      <section className="flex justify-center lg:justify-between p-4 border-b">
        <div className="me-5 hidden lg:block">
          <span>Get connected with me on social networks:</span>
        </div>
        <div className="flex">
          <a
            href="https://github.com/GabrielMelhem"
            className="me-4 text-secondary"
          >
            <IoLogoGithub size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-melhem-9b714821a/"
            className="me-4 text-secondary"
          >
            <IoLogoLinkedin size={40} />
          </a>
          <a
            href="#"
            className="me-4 text-secondary"
          >
            <IoLogoFacebook size={40} />
          </a>
        </div>
      </section>
      <section className="flex justify-center lg:justify-between p-4 border-b">
        <div className="flex flex-col">
          <h6 className="text-uppercase font-bold mb-4 ml-4">KFZ Konfigurator</h6>
          <p className="ml-8">Konfigurieren Sie Ihren Fahrzeuge</p>
        </div>
        {/* <div className="mb-4">
          <h6 className="text-uppercase font-bold mb-4">Pages</h6>
        </div> */}
        <div className="mb-4 flex flex-col">
          <h6 className="text-uppercase font-bold mb-4">Contact</h6>
          <div className="flex items-center mb-2">
            <FaHome size={15} className="me-3 text-secondary" />
            <p>Berlin, 10709 Berlin</p>
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope size={13} className="me-3 text-secondary" />
            <p>Gabrielmelhem@gmail.com</p>
          </div>
          <div className="flex items-center mb-2">
            <FaPhone size={13} className="me-3 text-secondary" />
            <p>+ 01 234 567 88</p>
          </div>
          <div className="flex items-center">
            <FaFax size={13} className="me-3 text-secondary" />
            <p>+ 01 234 567 89</p>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright: 
        <Link className="text-secondary font-bold" to="https://www.linkedin.com/in/gabriel-melhem-9b714821a/">
              Gabriel
        </Link> 
      </div>
    </footer>
  );
}

export default Footer;
