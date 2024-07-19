// eslint-disable-next-line react/prop-types
const RedirectButton = ({ url, buttonText, style }) => {
  const redirectToURL = () => {
    window.location.href = url;
  };

  const styleClass = `bg-teal-300 dark:bg-stone-900 rounded-lg p-3 flex mx-auto hover:underline hover:shadow-md dark:hover:shadow-md-dark ${style}`

  return (
    <button
      onClick={redirectToURL}
      className={styleClass}
    >
      {buttonText}
    </button>
  );
};

export default RedirectButton;
