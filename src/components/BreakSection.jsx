import RedirectButton from "./RedirectButton";

const BreakSection = () => {
  return (
    <div className="py-6 bg-slate-300">
      <div className="text-3xl text-slate-950 font-medium py-3 flex justify-center">{`Let's Gets Work`}</div>
      <RedirectButton
        url={"https://wa.me/08999015103"}
        buttonText={"Hire me"}
      />
    </div>
  );
};

export default BreakSection;
