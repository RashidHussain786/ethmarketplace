"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ children, activeLinkClass, ...props }) => {
  const pathname = usePathname();

  // Determine if the link is active based on current pathname
  const isActive = pathname === props.href;

  // Default class name for the link
  let childClassName = '';
  if (children && children.props && children.props.className) {
    childClassName = children.props.className;
  }

  // Add activeLinkClass or default class if active
  let className = isActive
    ? `${childClassName} ${activeLinkClass ? activeLinkClass : "text-cyan-600"}`
    : childClassName;

  // Wrap children with className if it's not an <a> tag
  const wrappedChildren = React.isValidElement(children)
    ? React.cloneElement(children, { className })
    : <span className={className}>{children}</span>;

  return (
    <Link href={props.href}>
      {wrappedChildren}
    </Link>
  );
};

export default ActiveLink;
