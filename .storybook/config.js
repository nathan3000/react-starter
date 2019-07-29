import { configure, addDecorator } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import AppWrapper from "../src/components/AppWrapper";

const req = require.context("../src/components", true, /\.story\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(jsxDecorator);

addDecorator(story => <AppWrapper>{story()}</AppWrapper>);

configure(loadStories, module);
