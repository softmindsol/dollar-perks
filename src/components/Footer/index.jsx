import logoWhite from "../../assets/images/logoWhite.png";

const Footer = () => {
  return (
    <footer className=' bg-black/90 pt-10 flex flex-col items-center justify-center'>
      <img src={logoWhite} alt="Logo" className="" />
      <h4 className='text-center text-sm p-4 mt-16 bg-black w-full text-white'> Copyright © 2025 DollarPerks </h4>
    </footer>
  );
};

export default Footer;
