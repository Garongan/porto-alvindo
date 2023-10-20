/* eslint-disable react/prop-types */
const Header = ({ scrollToSection }) => {
  return (
    <div className="bg-slate-900 fixed top-0 w-full z-10">
      <div className="container mx-auto flex gap-4 py-3 px-8 items-center">
        <div className="text-lg md:text-2xl justify-start basis-full">
          Alvindo Tri Jatmiko
        </div>
        <ul className="list-none flex items-center gap-4 text-sm md:text-base justify-end basis-full">
          <li>
            <button
              onClick={scrollToSection}
              data-section="overview"
              className="hover:underline"
            >
              Overview
            </button>
          </li>
          <li>
            <button
              onClick={scrollToSection}
              data-section="portofolio"
              className="hover:underline"
            >
              Portfolio
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
