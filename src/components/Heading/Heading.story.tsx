import React from "react";
import { storiesOf } from "@storybook/react";
import Heading from "./Heading";

storiesOf("Heading", module).add("default", () => (
  <>
    <Heading as="h1" fontSize={8}>
      Heading 1
    </Heading>
    <Heading as="h2" fontSize={7}>
      Heading 2
    </Heading>
    <Heading as="h3" fontSize={6}>
      Heading 3
    </Heading>
    <Heading as="h4" fontSize={5}>
      Heading 4
    </Heading>
  </>
));
