import React from "react";
import ReactDom from "react-dom";

const date = new Date();
const currentTime = date.getHours();

var greeting;

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good night";
  customStyle.color = "blue";
}
ReactDom.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
