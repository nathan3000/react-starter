import styled from "@emotion/styled";
import { borderRadius, BorderRadiusProps } from "styled-system";

import Box, { BoxProps } from "../Box";

export type ButtonProps = BoxProps & BorderRadiusProps;

const Button = styled(Box)<ButtonProps>(
  {
    display: "inline-block",
  },
  borderRadius
);

Button.defaultProps = {
  as: "button",
  m: 0,
  px: 3,
  py: 2,
  bg: "blue.500",
  borderRadius: 4,
  color: "white",
};

export default Button;
