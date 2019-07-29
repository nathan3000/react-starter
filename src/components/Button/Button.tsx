import styled from "@emotion/styled";
import { borderRadius, BorderRadiusProps, variant } from "styled-system";

import Box, { BoxProps } from "../Box";

export type ButtonProps = BoxProps &
  BorderRadiusProps & {
    variant?: string;
  };

const buttonStyle = variant({
  key: "buttons",
});

const Button = styled(Box)<ButtonProps>(
  {
    display: "inline-block",
  },
  borderRadius,
  buttonStyle
);

Button.defaultProps = {
  as: "button",
  m: 0,
  px: 3,
  py: 2,
  borderRadius: 4,
  variant: "primary",
};

export default Button;
