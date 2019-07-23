import React from "react";

import { storiesOf } from "@storybook/react";

import App from "../components/App";

import "../index.css";

storiesOf("App", module).add("default", () => <App title="React Starter" />);
