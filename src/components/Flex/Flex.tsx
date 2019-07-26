import styled from "@emotion/styled";
import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  FlexWrapProps,
  FlexDirectionProps,
  AlignItemsProps,
  JustifyContentProps,
} from "styled-system";
import Box, { BoxProps } from "../Box";

export type FlexProps = BoxProps &
  FlexWrapProps &
  FlexDirectionProps &
  AlignItemsProps &
  JustifyContentProps;

const Flex = styled(Box)<FlexProps>(
  { display: "flex" },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
);

export default Flex;
