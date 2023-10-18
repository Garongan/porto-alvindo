const Header = () => {
  return (
    <div className="bg-slate-700">
      <div className="container mx-auto flex gap-4 py-3 px-8 cursor-pointer sticky top-0 items-center">
        <div className="text-2xl justify-start basis-full">
          Alvindo Tri Jatmiko
        </div>
        <ul className="list-none flex items-center gap-4 text-base justify-end basis-full">
          <li>Overview</li>
          <li>Portfolio</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
