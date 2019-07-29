import styled from "@emotion/styled";
import Text, { TextProps } from "../Text";

type HeadingProps = TextProps;

const Heading = styled(Text)<HeadingProps>``;

Heading.defaultProps = {
  as: "h2",
  fontWeight: "bold",
};

Heading.displayName = "Heading";

export default Heading;
