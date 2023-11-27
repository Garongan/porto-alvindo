import RedirectButton from "./RedirectButton";

const BreakSection = () => {
  return (
    <div className="py-6 bg-slate-900">
      <div className="text-3xl font-medium py-3 flex justify-center">{`Let's Gets Work`}</div>
      <RedirectButton
        url={"https://wa.me/+6×8999015103"}
        buttonText={"Hire me"}
      />
    </div>
  );
};

export default BreakSection;
