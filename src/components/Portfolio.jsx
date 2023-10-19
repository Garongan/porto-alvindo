/* eslint-disable react/prop-types */
const Portfolio = ({ data }) => {
  return (
    <div className="py-6">
      <div className="text-3xl container mx-auto px-8">My Portfolio</div>
      <div className="container mx-auto py-6 px-8  grid grid-flow-col auto-cols-max">
        {data.map((item, index) => (
          <div className="bg-slate-700 p-3 rounded-lg w-96 hover:shadow-lg dark:hover:shadow-lg-dark" key={index}>
            <img src={item.imgDekstop} alt={item.name} />
            <div className="divide-y flex flex-col">
              <div className="cardHeader py-3">
                <div className="text-xl">Title: </div>
                <div className="text-base font-medium">{item.name}</div>
              </div>
              <div className="cardContent pt-3">
                <div className="text-xl">Overview: </div>
                <div className="text-base">{item.overview}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
