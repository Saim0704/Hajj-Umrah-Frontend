import Link from "next/link";
import React from "react";

const CLink = ({ route, handleClick, prefetch = false, children, ...rest }) => {
  return (
    <Link href={route} prefetch={prefetch} {...rest}>
      <a onClick={handleClick}>{children}</a>
    </Link>
  );
};

export default CLink;