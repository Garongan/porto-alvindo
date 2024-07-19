import RedirectButton from "./RedirectButton";

const BreakSection = () => {
  return (
    <div className="py-6 bg-teal-100 dark:bg-teal-950">
      <div className="text-xl md:text-2xl font-medium py-3 flex justify-center">{`Let's Gets Work`}</div>
      <RedirectButton
        url={"https://wa.me/+628999015103"}
        buttonText={"Hire me"}
      />
    </div>
  );
};

export default BreakSection;
