export default function Loading({ showLoading }) {
  const classes = showLoading
    ? "spinner-border text-primary"
    : "spinner-border text-primary d-none";

  return (
    <div className={classes} role="status">
      <span className="sr-only"></span>
    </div>
  );
}
