const Overview = () => {
  return (
    <div className="flex flex-row items-center justify-center py-24 px-24 divide-x">
      <div className="basis-full p-6 flex justify-end">
        <img
          src="src/assets/3x4 c.jpg"
          alt=""
          className="rounded-full object-cover object-top w-96 h-96"
        />
      </div>
      {/* overview start */}
      <div className="basis-full p-6 flex justify-start">
        <div className="w-96">
          Pengembang Web dan Game Dapat bekerja dalam tim, fast respon, dan
          berusaha keras. Pembelajar dalam pengembangan unity game, web3, dan 3D
          Modeller
        </div>
      </div>
      {/* overview end */}
    </div>
  );
};

export default Overview;
