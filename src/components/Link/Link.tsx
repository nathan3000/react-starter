import React from "react";
import styled from "@emotion/styled";
import css from "@styled-system/css";
import Text, { TextProps } from "../Text";

export type LinkProps = TextProps & {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  onClick?(event: React.MouseEvent<HTMLAnchorElement>): void;
  ref?: { current?: HTMLAnchorElement };
  href?: string;
  rel?: string;
  target?: string;
};

const Link = styled(Text)<LinkProps>(
  css({
    textDecoration: "underline",
    "&:hover": {
      color: "blue.800",
    },
  })
);

Link.defaultProps = {
  as: "a",
  color: "blue.600",
};

Link.displayName = "Link";

export default Link;
