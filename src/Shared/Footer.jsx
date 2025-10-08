import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-br from-black via-black to-purple-950 py-10 sm:px-8 px-5 flex flex-col items-center">
      <div className="flex flex-wrap justify-between items-start gap-5 w-full py-5 border-b border-gray-500">
        <div className="flex flex-col items-start gap-3">
          <h4 className="text-xl font-bold text-white">NR-Softwares</h4>
          <p className="max-w-xs font-medium text-gray-300">
            NR-Softwares is a software company fucused on providing the app
            sharing service. We are here to publish your apps to the users.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h5 className="font-semibold text-white text-lg">Company</h5>
          <ul className="font-medium text-gray-400 flex flex-col items-start gap-1">
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Our Mission
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h5 className="font-semibold text-white text-lg">Information</h5>
          <ul className="font-medium text-gray-400 flex flex-col items-start gap-1">
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Join Us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h5 className="font-semibold text-white text-lg">Information</h5>
          <ul className="font-medium text-gray-400 flex flex-col items-start gap-2">
            <li>
              <a
                href="#"
                className="hover:text-white transition duration-300 items-center flex gap-1 group"
              >
                <span className="p-1 rounded-full bg-white group-hover:text-black duration-300 text-gray-700">
                  <FaXTwitter></FaXTwitter>
                </span>
                @NR-Softwares
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition duration-300 items-center flex gap-1 group"
              >
                <span className="p-1 rounded-full bg-white group-hover:bg-sky-700 group-hover:text-white text-black duration-300">
                  <FaLinkedinIn></FaLinkedinIn>
                </span>
                @NR-Softwares
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition duration-300 items-center flex gap-1 group"
              >
                <span className="p-1 rounded-full bg-white group-hover:bg-blue-600 group-hover:text-white text-black duration-300">
                  <FaFacebookF></FaFacebookF>
                </span>
                @NR-Softwares
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition duration-300 items-center flex gap-1 group"
              >
                <span className="p-1 rounded-full bg-white group-hover:text-red-700 duration-300 text-black">
                  <IoMdMail></IoMdMail>
                </span>
                support@nr-softwares.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="font-medium text-gray-300 text-center mt-5">
        © @NR-Softwares. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
