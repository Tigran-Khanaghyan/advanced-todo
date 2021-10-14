export const WarningMessage = ({ showWarning, setShowWarning, message }) => {
  let classes = showWarning
    ? "alert alert-warning"
    : "alert alert-warning d-none";

  const handleClose = () => {
    setShowWarning(false);
  };
  return (
    <div className={classes} role="alert">
      {message}
      <button
        type="button"
        className="btn close-btn bg-transparent"
        onClick={handleClose}
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export function ErrorMessage({ message, showError}) {
  const classes = showError ? "danger" : "danger-hide"
  return <div className={classes}>{message}</div>;
}
