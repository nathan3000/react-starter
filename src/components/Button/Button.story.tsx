import React from "react";
import { storiesOf } from "@storybook/react";
import Box from "../Box";
import Button from "./Button";
import Flex from "../Flex";

storiesOf("Button", module).add("default", () => (
  <Flex>
    <Box p={2}>
      <Button>Default button</Button>
    </Box>
    <Box p={2}>
      <Button variant="primary">Primary button</Button>
    </Box>
    <Box p={2}>
      <Button variant="secondary">Secondary button</Button>
    </Box>
  </Flex>
));
