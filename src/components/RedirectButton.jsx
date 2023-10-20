// eslint-disable-next-line react/prop-types
const RedirectButton = ({ url, buttonText }) => {
  const redirectToURL = () => {
    window.location.href = url;
  };

  return (
    <button
      onClick={redirectToURL}
      className="bg-slate-950 rounded-lg p-3 flex mx-auto hover:underline hover:shadow-lg-dark"
    >
      {buttonText}
    </button>
  );
};

export default RedirectButton;
