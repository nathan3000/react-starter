import { configure, addDecorator } from "@storybook/react";
import AppWrapper from "../src/components/AppWrapper";

const req = require.context("../src/components", true, /\.story\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => <AppWrapper>{story()}</AppWrapper>);

configure(loadStories, module);
