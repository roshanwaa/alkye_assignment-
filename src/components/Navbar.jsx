import logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-around items-center py-4">
        <div className="flex items-center">
          <a href="#" className="text-white mr-4 cursor-pointer">
            PROJECTS
          </a>
          <a href="#" className="text-white mr-8 cursor-pointer">
            EXPERTISE
          </a>
          <a href="#" className="text-white mr-8 cursor-pointer">
            ABOUT
          </a>
          <a href="#" className="text-white mr-8 cursor-pointer">
            PEOPLE
          </a>
        </div>
        <img className="h-28" src={logo} alt="Logo" />
        <div className="hidden md:flex">
          <a href="#" className="text-white mr-8 cursor-pointer">
            CAREERS
          </a>
          <a href="#" className="text-white cursor-pointer">
            AU
          </a>
        </div>
      </nav>
      <div className="navbarLine"></div>
    </>
  );
};

export default Navbar;
