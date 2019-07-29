import React from "react";
import styled from "@emotion/styled";
import {
  space,
  layout,
  typography,
  color,
  border,
  shadow,
} from "styled-system";
import {
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorStyleProps,
  BackgroundColorProps,
  BorderProps,
  ShadowProps,
} from "styled-system";

export type BoxProps = SpaceProps &
  LayoutProps &
  TypographyProps &
  ColorStyleProps &
  BackgroundColorProps &
  ShadowProps &
  BorderProps & {
    as?: string;
  };

const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${border}
  ${shadow}
`;

Box.displayName = "Box";

Box.defaultProps = {
  fontFamily: "sansSerif",
};

export default Box;
