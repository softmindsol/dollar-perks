import logoWhite from "../../assets/images/logoWhite.png";

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-black/90 to-black pt-16 pb-6 flex flex-col items-center justify-center relative overflow-hidden'>
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

      {/* Logo */}
      <img src={logoWhite} alt="Logo" className="mb-8 hover:scale-105 transition-transform duration-300" />

      {/* Links Section */}
      <div className="flex items-center gap-6 mb-8">
        <a
          href="https://dollarperks.net/privacy-policy/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium relative group"
        >
          Privacy Policy
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
        </a>
        <span className="text-gray-600">•</span>
        {/* <a
          href="#"
          className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium relative group"
        >
          Terms of Service
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
        </a> */}
      </div>

      {/* Divider */}
      <div className="w-64 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>

      {/* Copyright */}
      <p className='text-center text-sm text-gray-400'>
        © 2025 <span className="text-white font-semibold">DollarPerks</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
