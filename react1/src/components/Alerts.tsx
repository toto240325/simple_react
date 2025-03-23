import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alerts = ({ children }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
  //   <div class="alert alert-warning alert-dismissible fade show" role="alert">
  //   <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  //   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  // </div>;
};

export default Alerts;
