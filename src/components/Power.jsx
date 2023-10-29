/* eslint-disable react/prop-types */
const Power = ({ power }) => {
  return (
    <div className="py-6">
      <div className="text-3xl container mx-auto px-8">My Power</div>
      <div className="bg-slate-900/50 py-6 my-6 px-8">
        <div className="container mx-auto grid lg:grid-cols-6 sm:grid-cols-2 grid-cols-1 gap-4 sm:h-auto h-96 overflow-auto">
          {power.map((item, index) => {
            return (
              <div
                className="bg-slate-950 uppercase text-md rounded-lg p-3 hover:underline shadow-lg transition-shadow hover:shadow-lg-dark"
                key={index}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Power;
