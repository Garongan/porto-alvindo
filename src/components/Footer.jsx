const Footer = () => {
  return (
    <div className="bg-slate-700 flex">
      <div className="mx-auto container py-6 px-8">
        <ul className="grid grid-flow-row md:grid-flow-col pb-6 small text-light list-disc list-inside">
          <div className="w-4/5 md:w-full">
            <li>Alamat: Lowokwaru, Malang</li>
            <li>Instagram: @alvindotri.j</li>
            <li>Facebook: Alvindo</li>
          </div>
          <div className="w-4/5 md:w-full">
            <li>Wa: +628999015103</li>
            <li>LinkedIn: Alvindo Tri Jatmiko</li>
            <li>Email: alvindo56@gmail.com</li>
          </div>
          <div className="w-4/5 md:w-full">
            <li>Telegram: @alvindotri</li>
            <li>Github: Garongan</li>
            <li>Tiktok: @alvindotri</li>
          </div>
        </ul>
        <hr className="bg-slate-50" />
        <p className="pt-6 text-center">
          © 2023 Alvindo Tri Jatmiko
        </p>
      </div>
    </div>
  );
};

export default Footer;
