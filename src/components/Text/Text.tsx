import styled from "@emotion/styled";
import { space, typography, color } from "styled-system";
import Box, { BoxProps } from "../Box";

export type TextProps = BoxProps;

const Text = styled(Box)<TextProps>`
  ${space}
  ${typography}
  ${color}
`;

Text.defaultProps = {
  as: "span",
};

Text.displayName = "Text";

export default Text;
