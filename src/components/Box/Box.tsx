import React from "react";
import styled from "@emotion/styled";
import { space, layout, typography, color, border } from "styled-system";
import {
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorStyleProps,
  BackgroundColorProps,
  BorderProps,
} from "styled-system";

export type BoxProps = SpaceProps &
  LayoutProps &
  TypographyProps &
  ColorStyleProps &
  BackgroundColorProps &
  BorderProps & {
    as?: string;
  };

const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${border}
`;

Box.displayName = "Box";

Box.defaultProps = {
  fontFamily: "sansSerif",
};

export default Box;
