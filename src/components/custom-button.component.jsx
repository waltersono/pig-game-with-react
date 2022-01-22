import React from "react";

const CustomButtom = ({ children, modifier, ...otherProps }) => (
  <button className={`btn ${modifier}`} {...otherProps}>
    {children}
  </button>
);

export default CustomButtom;
