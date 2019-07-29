import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import Flex from "../Flex";

storiesOf("Button", module).add("default", () => (
  <Flex>
    <Button>Button</Button>
    <Button variant="primary">Primary button</Button>
  </Flex>
));
