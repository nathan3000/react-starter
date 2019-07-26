import React from "react";
import { storiesOf } from "@storybook/react";
import Flex from "./Flex";
import Box from "../Box";

storiesOf("Flex", module).add("default", () => (
  <>
    <Flex justifyContent="space-around">
      <Box border="1px solid" p={2}>
        Column 1
      </Box>
      <Box border="1px solid" p={2}>
        Column 2
      </Box>
    </Flex>
  </>
));
