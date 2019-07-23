import React from "react";

import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";

import App from "../components/App";

import "../index.css";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("App")} />
));

storiesOf("App", module).add("default", () => <App title="React Starter" />);
