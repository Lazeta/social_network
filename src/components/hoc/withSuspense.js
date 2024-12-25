import React from "react";
import Preloader from "../common/Preloader/Preloader";

const withSuspense = (Component) => {
  const WrapperComponent = (props) => {
    // const { pathname, params } = props.route;

    return (
      <React.Suspense fallback={<Preloader />}>
        <Component {...props} />
      </React.Suspense>
    );
  };

  return WrapperComponent;
};

export default withSuspense;
