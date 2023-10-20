const Overview = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-x md:divide-y-0">
        <div className="basis-full p-6 flex justify-end">
          <img
            src="profile.jpg"
            alt=""
            className="rounded-full object-cover object-top w-72 h-72 shadow-lg dark:shadow-lg-dark"
          />
        </div>
        {/* overview start */}
        <div className="basis-full p-6 flex justify-start">
          <div className="w-72">
            <div className="text-xl font-medium py-3">
              Pengembang Web dan Game
            </div>
            <div className="text-base">
              Dapat bekerja dalam tim, fast respon, dan berusaha keras.
              Pembelajar dalam pengembangan unity game, web3, dan 3D Modeller
            </div>
          </div>
        </div>
        {/* overview end */}
      </div>
    </div>
  );
};

export default Overview;
