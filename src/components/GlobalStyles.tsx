import React from "react";
import { Global } from "@emotion/core";

export default () => (
  <Global
    styles={{
      html: {
        lineHeight: "1.5",
        WebkitTextSizeAdjust: "100%",
        boxSizing: "border-box",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,     "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",     "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      body: { margin: "0" },
      main: { display: "block" },
      h1: { fontSize: "2em", margin: "0.67em 0" },
      hr: { boxSizing: "content-box", height: "0", overflow: "visible" },
      pre: { fontFamily: "monospace, monospace", fontSize: "1em" },
      a: {
        backgroundColor: "transparent",
        color: "inherit",
        textDecoration: "inherit",
      },
      "abbr[title]": {
        borderBottom: "none",
        textDecoration: ["underline", "underline dotted"],
        WebkitTextDecoration: "underline dotted",
      },
      "b, strong": { fontWeight: "bolder" },
      "code, kbd, samp": {
        fontFamily: "monospace, monospace",
        fontSize: "1em",
      },
      small: { fontSize: "80%" },
      "sub, sup": {
        fontSize: "75%",
        lineHeight: "0",
        position: "relative",
        verticalAlign: "baseline",
      },
      sub: { bottom: "-0.25em" },
      sup: { top: "-0.5em" },
      img: { borderStyle: "solid" },
      "button, input, optgroup, select, textarea": {
        fontFamily: "inherit",
        fontSize: "100%",
        lineHeight: "inherit",
        margin: "0",
        padding: "0",
        color: "inherit",
      },
      "button, input": { overflow: "visible" },
      "button, select": { textTransform: "none" },
      'button, [type="button"], [type="reset"], [type="submit"]': {
        WebkitAppearance: "button",
      },
      'button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner': {
        borderStyle: "none",
        padding: "0",
      },
      'button:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring': {
        outline: "1px dotted ButtonText",
      },
      fieldset: { padding: "0", margin: "0" },
      legend: {
        boxSizing: "border-box",
        color: "inherit",
        display: "table",
        maxWidth: "100%",
        padding: "0",
        whiteSpace: "normal",
      },
      progress: { verticalAlign: "baseline" },
      textarea: { overflow: "auto", resize: "vertical" },
      '[type="checkbox"], [type="radio"]': {
        boxSizing: "border-box",
        padding: "0",
      },
      '[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button': {
        height: "auto",
      },
      '[type="search"]': {
        WebkitAppearance: "textfield",
        outlineOffset: "-2px",
      },
      '[type="search"]::-webkit-search-decoration': {
        WebkitAppearance: "none",
      },
      "::-webkit-file-upload-button": {
        WebkitAppearance: "button",
        font: "inherit",
      },
      details: { display: "block" },
      summary: { display: "list-item" },
      template: { display: "none" },
      "[hidden]": { display: "none" },
      "*, *::before, *::after": {
        boxSizing: "inherit",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "#e2e8f0",
      },
      "blockquote, dl, dd, h1, h2, h3, h4, h5, h6, figure, p, pre": {
        margin: "0",
      },
      button: { background: "transparent", padding: "0" },
      "button:focus": {
        outline: ["1px dotted", "5px auto -webkit-focus-ring-color"],
      },
      "ol, ul": { listStyle: "none", margin: "0", padding: "0" },
      "input:-ms-input-placeholder, textarea:-ms-input-placeholder": {
        color: "inherit",
        opacity: 0.5,
      },
      "input::-ms-input-placeholder, textarea::-ms-input-placeholder": {
        color: "inherit",
        opacity: 0.5,
      },
      "input::placeholder, textarea::placeholder": {
        color: "inherit",
        opacity: 0.5,
      },
      'button, [role="button"]': { cursor: "pointer" },
      table: { borderCollapse: "collapse" },
      "h1, h2, h3, h4, h5, h6": {
        fontSize: "inherit",
        fontWeight: "inherit",
      },
      "pre, code, kbd, samp": {
        fontFamily:
          'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New",     monospace',
      },
      "img, svg, video, canvas, audio, iframe, embed, object": {
        display: "block",
        verticalAlign: "middle",
      },
      "img, video": { maxWidth: "100%", height: "auto" },
    }}
  />
);
