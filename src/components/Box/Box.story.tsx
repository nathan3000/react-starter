import React from "react";
import { storiesOf } from "@storybook/react";
import Box from "./Box";

storiesOf("Box", module).add("default", () => (
  <Box border="1px solid" p={2}>
    This is a Box
  </Box>
));
