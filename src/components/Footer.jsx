import React from "react";
import { FaEnvelope, FaFax, FaHome, FaPhone } from "react-icons/fa";
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex flex-col py-8 px-4 md:px-6 lg:px-8 bg-gray-100">
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0">
        <div className="w-full md:w-1/3 bg-gray-100 p-4">
        KFZ Konfigurator
        <p className="">Konfigurieren Sie Ihren Fahrzeuge</p>
        </div>
        <div className="w-full md:w-1/3 bg-gray-100 p-4">
        soziale Netzwerke
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
        </div>
        <div className="w-full md:w-1/3 bg-gray-100 p-4">
          Kontakt
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
        <div className="w-full md:w-1/3 bg-gray-100 p-4">
        © 2024 Copyright: 
        <Link className="text-secondary font-bold" to="https://www.linkedin.com/in/gabriel-melhem-9b714821a/">
              Gabriel
        </Link> 
        </div>
      </div>
    </footer>
  );
}

export default Footer;
