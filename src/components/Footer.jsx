const Footer = () => {
  return (
    <div className="py-6 bg-slate-700 flex">
      <div className="mx-auto container">
        <ul className="grid grid-cols-3 gap-2 pb-6 small text-light list-disc">
          <div className="mx-auto">
            <li>Alamat: Lowokwaru, Malang</li>
            <li>Instagram: @alvindotri.j</li>
            <li>Facebook: Alvindo</li>
          </div>
          <div className="mx-auto">
            <li>Wa: +628999015103</li>
            <li>LinkedIn: Alvindo Tri Jatmiko</li>
            <li>Email: alvindo56@gmail.com</li>
          </div>
          <div className="mx-auto">
            <li>Telegram: @alvindotri</li>
            <li>Github: Garongan</li>
            <li>Tiktok: @alvindotri</li>
          </div>
        </ul>
        <hr className="bg-slate-50 mx-8" />
        <p className="pt-6 text-center">
          © 2023 Alvindo Tri Jatmiko
        </p>
      </div>
    </div>
  );
};

export default Footer;
